import json
import pandas as pd
import re
from datetime import datetime

def parse_typescript_products():
    """Parse the TypeScript products file and extract product data"""
    
    # Read the TypeScript file
    with open('src/data/products.ts', 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Extract the products array using regex
    # Find the allProducts array
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
        # Find the end of this product (start of next product or end of array)
        if i + 1 < len(product_matches):
            end = product_matches[i + 1].start()
        else:
            end = len(array_content)
        
        product_text = array_content[start:end]
        
        # Extract product data
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
            # Extract quoted strings from array
            values = re.findall(r"['\"`]([^'\"`]*)['\"`]", array_content)
            return ", ".join(values)
        return ""
    
    def extract_description(lang, text):
        pattern = rf"{lang}:\s*['\"`](.*?)['\"`]"
        return extract_field(pattern, text).replace("\\'", "'")
    
    def extract_specifications(lang, text):
        pattern = rf"{lang}:\s*\[(.*?)\]"
        match = re.search(pattern, text, re.DOTALL | re.MULTILINE)
        if match:
            specs_content = match.group(1)
            # Extract all quoted strings
            specs = re.findall(r"['\"`]([^'\"`]*)['\"`]", specs_content)
            return " | ".join(spec.replace("\\'", "'") for spec in specs)
        return ""
    
    try:
        product = {
            'ID': extract_quoted_value('id', product_text),
            'Name': extract_quoted_value('name', product_text),
            'Category': extract_quoted_value('category', product_text),
            'CategoryId': extract_quoted_value('categoryId', product_text),
            'Code': extract_quoted_value('code', product_text),
            'Image': extract_quoted_value('image', product_text),
            'Colors': extract_array_values('colors', product_text),
            'Featured': 'Yes' if 'featured: true' in product_text else 'No',
            'Hidden': 'Yes' if 'hidden: true' in product_text else 'No',
            'Description_EN': extract_description('en', product_text),
            'Description_TR': extract_description('tr', product_text),
            'Specifications_EN': extract_specifications('en', product_text),
            'Specifications_TR': extract_specifications('tr', product_text),
        }
        
        # Only return if we have a valid ID
        return product if product['ID'] else None
        
    except Exception as e:
        print(f"Error parsing product: {e}")
        return None

def export_to_excel():
    """Export products to Excel file"""
    
    try:
        # Parse products
        products = parse_typescript_products()
        
        if not products:
            print("No products found!")
            return
        
        # Create DataFrame
        df = pd.DataFrame(products)
        
        # Generate filename with timestamp
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"products_export_{timestamp}.xlsx"
        
        # Export to Excel
        with pd.ExcelWriter(filename, engine='openpyxl') as writer:
            # Main products sheet
            df.to_excel(writer, sheet_name='Products', index=False)
            
            # Summary sheet
            summary_data = {
                'Category': df['Category'].value_counts().index.tolist(),
                'Count': df['Category'].value_counts().values.tolist()
            }
            summary_df = pd.DataFrame(summary_data)
            summary_df.to_excel(writer, sheet_name='Summary', index=False)
            
            # Get workbook and adjust column widths
            workbook = writer.book
            products_sheet = writer.sheets['Products']
            
            # Auto-adjust column widths
            for column in products_sheet.columns:
                max_length = 0
                column_letter = column[0].column_letter
                
                for cell in column:
                    try:
                        if len(str(cell.value)) > max_length:
                            max_length = len(str(cell.value))
                    except:
                        pass
                
                adjusted_width = min(max_length + 2, 50)  # Max width 50
                products_sheet.column_dimensions[column_letter].width = adjusted_width
        
        print(f"✅ Products exported successfully to: {filename}")
        print(f"📊 Total products exported: {len(products)}")
        
        # Print category breakdown
        print("\n📋 Category breakdown:")
        category_counts = df['Category'].value_counts()
        for category, count in category_counts.items():
            print(f"   {category}: {count} products")
        
        return filename
        
    except Exception as e:
        print(f"❌ Error exporting products: {e}")
        return None

if __name__ == "__main__":
    print("🚀 Starting product export...")
    export_to_excel() 