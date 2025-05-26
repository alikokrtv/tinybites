import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import ProductSlider from '../components/ProductSlider';
import { featuredProducts, allProducts } from '../data/products';

const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="pt-16">
      <HeroSection />
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('home.featured.title')}
            </h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <AnimatedSection 
                key={product.id} 
                animation="fade-up" 
                delay={index * 100}
              >
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fade-up" className="text-center mt-12">
            <Link 
              to="/products" 
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium inline-block transition-colors duration-300"
            >
              {t('home.featured.viewAll')}
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="relative">
                <img 
                  src="/images/tiny-bites/elephant-tableware-1.jpg" 
                  alt="Elephant tableware for kids" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary-500 rounded-full opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {t('home.about.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('home.about.description')}
              </p>
              <Link 
                to="/about" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium inline-block transition-colors duration-300"
              >
                {t('home.about.button')}
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Product Slider */}
      <section className="py-12">
        <ProductSlider 
          products={allProducts.filter(p => p.categoryId === 'tableware')} 
          title={language === 'tr' ? 'Renklerle Yemek Saatini Eğlenceli Hale Getirmek' : 'Make Mealtime Fun with Colors'} 
        />
      </section>

      {/* Color Blocks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedSection animation="zoom-in" delay={0}>
              <div className="aspect-square bg-secondary-400 rounded-2xl p-6 flex items-center justify-center shadow-lg">
                <img 
                  src="/images/tiny-bites/elephant-tableware-pink.jpg" 
                  alt="Pink elephant tableware for kids" 
                  className="max-h-full rounded-lg"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="zoom-in" delay={100}>
              <div className="aspect-square bg-blue-400 rounded-2xl p-6 flex items-center justify-center shadow-lg">
                <img 
                  src="/images/storage-boxes/lv-237-shell.jpg" 
                  alt="Shell Storage Boxes Set" 
                  className="max-h-full rounded-lg"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="zoom-in" delay={200}>
              <div className="aspect-square bg-yellow-400 rounded-2xl p-6 flex items-center justify-center shadow-lg">
                <img 
                  src="/images/tiny-bites/elephant-tableware-blue.jpg" 
                  alt="Blue elephant tableware" 
                  className="max-h-full rounded-lg"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="zoom-in" delay={300}>
              <div className="aspect-square bg-green-400 rounded-2xl p-6 flex items-center justify-center shadow-lg">
                <img 
                  src="/images/baskets/lv-331-lv-341.png" 
                  alt="Premium baskets collection" 
                  className="max-h-full rounded-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Storage Boxes Slider */}
      <section className="py-12 bg-gray-50">
        <ProductSlider 
          products={allProducts.filter(p => p.categoryId === 'storageBoxes')} 
          title={language === 'tr' ? 'Şık ve Düzenli Saklama Kutuları' : 'Stylish Storage Solutions'} 
        />
      </section>
    </div>
  );
};

export default HomePage;