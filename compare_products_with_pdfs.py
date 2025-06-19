import json
import pandas as pd
import re
from datetime import datetime
import PyPDF2
import fitz  # PyMuPDF
import os
from pathlib import Path

def parse_typescript_products():
    """Parse the TypeScript products file and extract product data"""
    
    # Read the TypeScript file
    with open('src/data/products.ts', 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Extract the products array using regex
    array_match = re.search(r'export const allProducts: Product\[\] = \[(.*?)\];', content, re.DOTALL)
    if not array_match:
        raise ValueError("Could not find allProducts array")
    
    array_content = array_match.group(1)
    
    # Split products by looking for patterns that start with id:
    product_pattern = r'\{\s*id:\s*[\'"`]([^\'"`]+)[\'"`]'
    products = []
    
    # Find all product blocks
    product_matches = list(re.finditer(product_pattern, array_content))
    
    for i, match in enumerate(product_matches):
        start = match.start()
        if i + 1 < len(product_matches):
            end = product_matches[i + 1].start()
        else:
            end = len(array_content)
        
        product_text = array_content[start:end]
        product = extract_product_data(product_text)
        if product:
            products.append(product)
    
    return products

def extract_product_data(product_text):
    """Extract individual product data from text block"""
    
    def extract_field(pattern, text, default=""):
        match = re.search(pattern, text, re.DOTALL)
        return match.group(1).strip() if match else default
    
    def extract_quoted_value(field_name, text):
        pattern = rf"{field_name}:\s*['\"`]([^'\"`]*)['\"`]"
        return extract_field(pattern, text)
    
    def extract_array_values(field_name, text):
        pattern = rf"{field_name}:\s*\[(.*?)\]"
        match = re.search(pattern, text, re.DOTALL)
        if match:
            array_content = match.group(1)
            values = re.findall(r"['\"`]([^'\"`]*)['\"`]", array_content)
            return ", ".join(values)
        return ""
    
    def extract_description(lang, text):
        pattern = rf"{lang}:\s*['\"`](.*?)['\"`]"
        return extract_field(pattern, text).replace("\\'", "'")
    
    try:
        product = {
            'ID': extract_quoted_value('id', product_text),
            'Name': extract_quoted_value('name', product_text),
            'Category': extract_quoted_value('category', product_text),
            'Code': extract_quoted_value('code', product_text),
            'Colors': extract_array_values('colors', product_text),
            'Featured': 'Yes' if 'featured: true' in product_text else 'No',
            'Hidden': 'Yes' if 'hidden: true' in product_text else 'No',
            'Description_TR': extract_description('tr', product_text),
        }
        
        return product if product['ID'] else None
        
    except Exception as e:
        print(f"Error parsing product: {e}")
        return None

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF using PyMuPDF"""
    try:
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text()
        doc.close()
        return text
    except Exception as e:
        print(f"Error reading {pdf_path}: {e}")
        return ""

def parse_pdf_products():
    """Parse products from PDF files"""
    pdf_files = [
        "Baskets.pdf",
        "Storage Boxes.pdf", 
        "Food Plates for Kids (1).pdf",
        "Loren Katalog S.pdf"
    ]
    
    all_pdf_products = []
    
    for pdf_file in pdf_files:
        if os.path.exists(pdf_file):
            print(f"📖 Reading {pdf_file}...")
            text = extract_text_from_pdf(pdf_file)
            
            # Extract product codes (LV-XXX pattern)
            lv_codes = re.findall(r'LV-\d+[A-Z]*', text, re.IGNORECASE)
            
            # Extract product information
            products = extract_products_from_text(text, pdf_file)
            all_pdf_products.extend(products)
            
            print(f"   Found {len(products)} products in {pdf_file}")
        else:
            print(f"❌ PDF not found: {pdf_file}")
    
    return all_pdf_products

def extract_products_from_text(text, source_file):
    """Extract product information from PDF text"""
    products = []
    
    # Common patterns for product codes
    lv_pattern = r'LV-(\d+[A-Z]*)'
    lv_matches = re.finditer(lv_pattern, text, re.IGNORECASE)
    
    for match in lv_matches:
        code = f"LV-{match.group(1)}"
        
        # Try to extract context around the code
        start = max(0, match.start() - 200)
        end = min(len(text), match.end() + 200)
        context = text[start:end]
        
        # Extract capacity if mentioned
        capacity_match = re.search(r'(\d+)\s*(ml|lt|litre|liter)', context, re.IGNORECASE)
        capacity = capacity_match.group(0) if capacity_match else ""
        
        # Determine category based on source file
        category = determine_category_from_file(source_file)
        
        # Extract name (try to find text before or after the code)
        name = extract_product_name_from_context(context, code)
        
        products.append({
            'Code': code,
            'Name': name,
            'Category': category,
            'Capacity': capacity,
            'Source_PDF': source_file,
            'Context': context.strip()[:100] + "..." if len(context) > 100 else context.strip()
        })
    
    # Remove duplicates based on code
    seen_codes = set()
    unique_products = []
    for product in products:
        if product['Code'] not in seen_codes:
            seen_codes.add(product['Code'])
            unique_products.append(product)
    
    return unique_products

def determine_category_from_file(filename):
    """Determine product category based on PDF filename"""
    if "basket" in filename.lower():
        return "Baskets"
    elif "storage" in filename.lower():
        return "Storage Boxes"
    elif "food" in filename.lower() or "plates" in filename.lower() or "kids" in filename.lower():
        return "Tableware"
    elif "katalog" in filename.lower():
        return "Mixed"
    else:
        return "Unknown"

def extract_product_name_from_context(context, code):
    """Try to extract product name from context"""
    # Remove the code from context for name extraction
    clean_context = context.replace(code, "").strip()
    
    # Split by common delimiters and take reasonable chunks
    words = re.split(r'[.\n\r]+', clean_context)
    
    # Find the most likely name (usually the first substantial text chunk)
    for word_group in words:
        word_group = word_group.strip()
        if len(word_group) > 5 and len(word_group) < 100:
            # Clean up the name
            name = re.sub(r'[^\w\s\-]', '', word_group)
            if name and not name.isdigit():
                return name[:50]  # Limit length
    
    return "Unknown Product"

def create_comparison_analysis():
    """Create comprehensive comparison analysis"""
    
    print("🚀 Starting comprehensive product comparison...")
    
    # Get current products from TypeScript
    current_products = parse_typescript_products()
    current_df = pd.DataFrame(current_products)
    
    # Get products from PDFs
    pdf_products = parse_pdf_products()
    pdf_df = pd.DataFrame(pdf_products)
    
    # Create comparison
    comparison_data = []
    
    # Check each PDF product against current products
    for _, pdf_product in pdf_df.iterrows():
        pdf_code = pdf_product['Code']
        
        # Find matching current product
        current_match = current_df[current_df['Code'] == pdf_code]
        
        if len(current_match) > 0:
            # Product exists in both
            current_product = current_match.iloc[0]
            comparison_data.append({
                'Code': pdf_code,
                'Status': 'EXISTS',
                'PDF_Name': pdf_product['Name'],
                'Current_Name': current_product['Name'],
                'PDF_Category': pdf_product['Category'],
                'Current_Category': current_product['Category'],
                'PDF_Capacity': pdf_product['Capacity'],
                'Current_Featured': current_product['Featured'],
                'Current_Hidden': current_product['Hidden'],
                'Source_PDF': pdf_product['Source_PDF'],
                'Notes': 'Product exists in database'
            })
        else:
            # Product only in PDF
            comparison_data.append({
                'Code': pdf_code,
                'Status': 'MISSING_FROM_DATABASE',
                'PDF_Name': pdf_product['Name'],
                'Current_Name': '',
                'PDF_Category': pdf_product['Category'],
                'Current_Category': '',
                'PDF_Capacity': pdf_product['Capacity'],
                'Current_Featured': '',
                'Current_Hidden': '',
                'Source_PDF': pdf_product['Source_PDF'],
                'Notes': 'Product found in PDF but missing from database'
            })
    
    # Check for products in database but not in PDFs
    for _, current_product in current_df.iterrows():
        current_code = current_product['Code']
        
        # Check if this code exists in PDF products
        pdf_match = pdf_df[pdf_df['Code'] == current_code]
        
        if len(pdf_match) == 0:
            comparison_data.append({
                'Code': current_code,
                'Status': 'ONLY_IN_DATABASE',
                'PDF_Name': '',
                'Current_Name': current_product['Name'],
                'PDF_Category': '',
                'Current_Category': current_product['Category'],
                'PDF_Capacity': '',
                'Current_Featured': current_product['Featured'],
                'Current_Hidden': current_product['Hidden'],
                'Source_PDF': '',
                'Notes': 'Product exists in database but not found in PDFs'
            })
    
    # Create comparison DataFrame
    comparison_df = pd.DataFrame(comparison_data)
    
    # Generate filename with timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"product_comparison_{timestamp}.xlsx"
    
    # Export to Excel
    with pd.ExcelWriter(filename, engine='openpyxl') as writer:
        # Main comparison sheet
        comparison_df.to_excel(writer, sheet_name='Comparison', index=False)
        
        # Current products sheet
        current_df.to_excel(writer, sheet_name='Current_Products', index=False)
        
        # PDF products sheet
        pdf_df.to_excel(writer, sheet_name='PDF_Products', index=False)
        
        # Summary sheet
        summary_data = {
            'Status': ['EXISTS', 'MISSING_FROM_DATABASE', 'ONLY_IN_DATABASE'],
            'Count': [
                len(comparison_df[comparison_df['Status'] == 'EXISTS']),
                len(comparison_df[comparison_df['Status'] == 'MISSING_FROM_DATABASE']),
                len(comparison_df[comparison_df['Status'] == 'ONLY_IN_DATABASE'])
            ]
        }
        summary_df = pd.DataFrame(summary_data)
        summary_df.to_excel(writer, sheet_name='Summary', index=False)
        
        # Auto-adjust column widths for all sheets
        for sheet_name in writer.sheets:
            worksheet = writer.sheets[sheet_name]
            for column in worksheet.columns:
                max_length = 0
                column_letter = column[0].column_letter
                
                for cell in column:
                    try:
                        if len(str(cell.value)) > max_length:
                            max_length = len(str(cell.value))
                    except:
                        pass
                
                adjusted_width = min(max_length + 2, 50)
                worksheet.column_dimensions[column_letter].width = adjusted_width
    
    # Print results
    print(f"\n✅ Comparison analysis completed!")
    print(f"📊 Results saved to: {filename}")
    print(f"\n📋 Summary:")
    print(f"   📦 Total PDF products found: {len(pdf_df)}")
    print(f"   💾 Total current products: {len(current_df)}")
    print(f"   ✅ Products that exist in both: {len(comparison_df[comparison_df['Status'] == 'EXISTS'])}")
    print(f"   ❌ Products missing from database: {len(comparison_df[comparison_df['Status'] == 'MISSING_FROM_DATABASE'])}")
    print(f"   ⚠️  Products only in database: {len(comparison_df[comparison_df['Status'] == 'ONLY_IN_DATABASE'])}")
    
    # Show missing products
    missing_products = comparison_df[comparison_df['Status'] == 'MISSING_FROM_DATABASE']
    if len(missing_products) > 0:
        print(f"\n❌ Products missing from database:")
        for _, product in missing_products.iterrows():
            print(f"   {product['Code']} - {product['PDF_Name']} ({product['Source_PDF']})")
    
    # Show database-only products
    db_only_products = comparison_df[comparison_df['Status'] == 'ONLY_IN_DATABASE']
    if len(db_only_products) > 0:
        print(f"\n⚠️  Products only in database:")
        for _, product in db_only_products.iterrows():
            print(f"   {product['Code']} - {product['Current_Name']}")
    
    return filename

if __name__ == "__main__":
    create_comparison_analysis() 