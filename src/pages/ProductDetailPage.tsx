import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { allProducts } from '../data/products';
import { ChevronRight } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  
  const product = allProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {language === 'tr' ? 'Ürün bulunamadı' : 'Product not found'}
          </h1>
          <Link 
            to="/products" 
            className="inline-flex items-center text-pink-600 hover:text-pink-700"
          >
            {language === 'tr' ? 'Tüm ürünlere dön' : 'Back to all products'}
          </Link>
        </div>
      </div>
    );
  }
  
  // Deduplicate images to avoid showing the same image multiple times
  const images = product.galleryImages 
    ? Array.from(new Set([product.image, ...product.galleryImages])) 
    : [product.image];
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-pink-600">
              {language === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/products" className="hover:text-pink-600">
              {language === 'tr' ? 'Ürünler' : 'Products'}
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to={`/products/${product.categoryId}`} className="hover:text-pink-600">
              {product.category}
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-800">{product.name}</span>
          </div>
          
          {/* Back to All Products button */}
          <div className="mt-4">
            <Link 
              to="/products" 
              className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-700 rounded-md hover:bg-pink-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {language === 'tr' ? 'Tüm Ürünlere Dön' : 'Back to All Products'}
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <AnimatedSection animation="slide-in-left">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={images[activeImage]} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                  onError={() => {
                    // If image fails to load, fallback to first image
                    if (activeImage !== 0) {
                      setActiveImage(0);
                    }
                  }}
                />
              </div>
              
              {images.length > 1 && (
                <div className="p-4 grid grid-cols-5 gap-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`aspect-square border-2 rounded overflow-hidden ${
                        activeImage === index ? 'border-pink-500' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
          
          {/* Product Info */}
          <AnimatedSection animation="slide-in-right">
            <div className="space-y-6">
              <div>
                {product.code && (
                  <p className="text-sm text-gray-500 mb-1">
                    {language === 'tr' ? 'Ürün Kodu:' : 'Product Code:'} {product.code}
                  </p>
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {product.name}
                </h1>
                {product.price && (
                  <div className="mt-3 text-2xl font-semibold text-pink-600">
                    {product.price}
                  </div>
                )}
              </div>
              
              {/* Only show variants if there are actual variants in the product data */}
              {product.variants && product.variants.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    {language === 'tr' ? 'Varyantlar' : 'Variants'}
                  </h3>
                  <div className="flex gap-3">
                    {product.variants.map((variant, index) => (
                      <button 
                        key={index}
                        onClick={() => setActiveImage(Math.min(index, images.length - 1))}
                        className={`flex items-center px-3 py-1 rounded-full border ${activeImage === index ? 'border-pink-500 bg-pink-50' : 'border-gray-200'}`}
                      >
                        {variant.color && (
                          <div 
                            className="w-4 h-4 rounded-full mr-2" 
                            style={{ backgroundColor: variant.color }}
                          />
                        )}
                        <span className="text-sm">
                          {variant.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Always show colors if they exist */}
              {product.colors && product.colors.length > 0 && !product.variants && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    {language === 'tr' ? 'Renkler' : 'Colors'}
                  </h3>
                  <div className="flex gap-2">
                    {product.colors.map((color, index) => (
                      <div 
                        key={index}
                        className="w-8 h-8 rounded-full border border-gray-200" 
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {product.description && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    {language === 'tr' ? 'Ürün Açıklaması' : 'Product Description'}
                  </h3>
                  <div className="prose prose-sm text-gray-600">
                    <p>{product.description[language === 'tr' ? 'tr' : 'en']}</p>
                  </div>
                </div>
              )}
              
              {product.specifications && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    {language === 'tr' ? 'Özellikler' : 'Specifications'}
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {product.specifications[language === 'tr' ? 'tr' : 'en'].map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="pt-6">
                <Link
                  to="/contact"
                  className="inline-block bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition-colors"
                >
                  {language === 'tr' ? 'İletişime Geç' : 'Contact Us'}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {language === 'tr' ? 'İlgili Ürünler' : 'Related Products'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allProducts
              .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/product/${relatedProduct.id}`}
                  className="group block"
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-2">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 group-hover:text-pink-600">
                    {relatedProduct.name}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
