import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-20">
      <HeroSection />
      
      {/* Hikayemiz Section */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              {t('home.about.title')}
            </h2>
            <div className="h-1 w-20 bg-primary-500"></div>
          </AnimatedSection>
          
          <div className="flex flex-col gap-8">
            <AnimatedSection animation="fade-in" className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {t('home.story.content').split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Ürünleri Keşfet Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
              {t('products.explore.title')}
            </h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <AnimatedSection animation="slide-in-left">
              <div className="bg-primary-50 rounded-xl p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  {t('products.tiny-bites.title')}
                </h3>
                <p className="text-gray-700 mb-6">
                  {t('products.tiny-bites.description')}
                </p>
                <div className="relative overflow-hidden rounded-lg flex-grow mb-6">
                  <img 
                    src="/images/tiny-bites/elephant-tableware-1.jpg" 
                    alt="Tiny Bites Collection" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <Link 
                  to="/products/tableware" 
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full font-medium inline-block transition-colors duration-300 text-center"
                >
                  {t('home.hero.cta')}
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right">
              <div className="bg-secondary-50 rounded-xl p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-secondary-600 mb-4">
                  {t('products.loren-plastic.title')}
                </h3>
                <p className="text-gray-700 mb-6">
                  {t('products.loren-plastic.description')}
                </p>
                <div className="relative overflow-hidden rounded-lg flex-grow mb-6">
                  <img 
                    src="/images/storage-boxes/lv-237-shell.jpg" 
                    alt="Loren Plastic Collection" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <Link 
                  to="/products/storageBoxes" 
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-2 rounded-full font-medium inline-block transition-colors duration-300 text-center"
                >
                  {t('home.hero.cta')}
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
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
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium inline-block transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {t('home.featured.viewAll')}
            </Link>
          </AnimatedSection>
        </div>
      </section>
      

      


      {/* Color Blocks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedSection animation="zoom-in" delay={0}>
              <div className="aspect-square bg-primary-300 rounded-2xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img 
                  src="/images/tiny-bites/elephant-tableware-pink.jpg" 
                  alt="Pink elephant tableware for kids" 
                  className="max-h-full rounded-lg"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="zoom-in" delay={100}>
              <div className="aspect-square bg-secondary-300 rounded-2xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img 
                  src="/images/storage-boxes/lv-331-lv-341.png" 
                  alt="Shell Basket - Stylish and Functional Storage Solution" 
                  className="max-h-full rounded-lg"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="zoom-in" delay={200}>
              <div className="aspect-square bg-primary-400 rounded-2xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img 
                  src="/images/tiny-bites/elephant-tableware-blue.jpg" 
                  alt="Blue elephant tableware" 
                  className="max-h-full rounded-lg"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="zoom-in" delay={300}>
              <div className="aspect-square bg-secondary-400 rounded-2xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img 
                  src="/images/baskets/LV-330.jpg" 
                  alt="Stylish storage baskets" 
                  className="max-h-full rounded-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      

    </div>
  );
};

export default HomePage;