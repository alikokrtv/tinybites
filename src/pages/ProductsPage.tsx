import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import CategoryButton from '../components/CategoryButton';
import { allProducts } from '../data/products';

const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
  const { categoryId } = useParams<{ categoryId?: string }>();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>(categoryId || 'all');
  
  // Update active category when URL parameter changes
  useEffect(() => {
    if (categoryId) {
      setActiveCategory(categoryId);
    }
  }, [categoryId]);
  
  const categories = [
    { id: 'all', name: t('products.all') },
    { id: 'tableware', name: t('products.tableware') },
    { id: 'storageBoxes', name: t('products.storageBoxes') },
    { id: 'baskets', name: t('products.baskets') },
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? allProducts.filter(product => !product.hidden)
    : allProducts.filter(product => product.categoryId === activeCategory && !product.hidden);
  
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('products.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                category={category.name}
                isActive={activeCategory === category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  // Update URL when category changes
                  if (category.id === 'all') {
                    navigate('/products');
                  } else {
                    navigate(`/products/${category.id}`);
                  }
                }}
              />
            ))}
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <AnimatedSection 
              key={product.id} 
              animation="fade-up" 
              delay={index * 50}
            >
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;