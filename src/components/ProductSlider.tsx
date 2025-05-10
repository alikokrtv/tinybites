import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Product } from '../types/Product';

interface ProductSliderProps {
  products: Product[];
  title: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products, title }) => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const visibleProducts = 3;

  // Auto-advance slides
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev + 1 >= products.length - visibleProducts + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev - 1 < 0 ? products.length - visibleProducts : prev - 1
    );
  };

  // Pause autoplay on user interaction
  const handleSliderInteraction = () => {
    setAutoplay(false);
    // Resume autoplay after 10 seconds of no interaction
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <div className="py-12 bg-gray-50 rounded-lg shadow-inner">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        
        <div className="relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <Link 
                    to={`/product/${product.id}`}
                    className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
                    onClick={handleSliderInteraction}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                      {product.code && (
                        <p className="text-sm text-gray-500 mt-1">{product.code}</p>
                      )}
                      {product.description && (
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {product.description[language === 'tr' ? 'tr' : 'en']}
                        </p>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => { prevSlide(); handleSliderInteraction(); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
            aria-label="Previous product"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => { nextSlide(); handleSliderInteraction(); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
            aria-label="Next product"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
