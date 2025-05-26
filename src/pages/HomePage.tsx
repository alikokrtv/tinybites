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
          
          <div className="flex flex-col gap-12">
            <AnimatedSection animation="fade-up" className="w-full">
              <div className="relative h-96 md:h-[400px] max-w-4xl mx-auto">
                {/* First Image - Main image */}
                <div className="absolute top-0 left-0 z-10 w-4/5 h-4/5 rounded-xl overflow-hidden shadow-2xl hover:z-30 transform hover:scale-105 transition-all duration-500 hover:shadow-xl">
                  <img 
                    src="/images/tiny-bites/elephant-tableware-1.jpg" 
                    alt="Elephant tableware for kids" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 to-transparent"></div>
                </div>
                
                {/* Second Image - Diagonal overlap */}
                <div className="absolute bottom-0 right-0 z-0 w-3/4 h-3/5 rounded-xl overflow-hidden shadow-2xl hover:z-30 transform hover:scale-105 transition-all duration-500 hover:shadow-xl">
                  <img 
                    src="/images/tiny-bites/LV-112.jpg" 
                    alt="Colorful tableware collection" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-500/30 to-transparent"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full z-0"></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-secondary-200 rounded-full z-0 opacity-70"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {t('home.story.content').split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link 
                  to="/about" 
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium inline-block transition-colors duration-300"
                >
                  {t('home.about.button')}
                </Link>
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
      

      
      {/* Product Slider */}
      <section className="py-12 bg-primary-50">
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
                  src="/images/storage-boxes/lv-237-shell.jpg" 
                  alt="Shell Storage Boxes Set" 
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
      <section className="py-12 bg-secondary-50">
        <ProductSlider 
          products={allProducts.filter(p => p.categoryId === 'storageBoxes')} 
          title={language === 'tr' ? 'Şık ve Düzenli Saklama Kutuları' : 'Stylish Storage Solutions'} 
        />
      </section>
    </div>
  );
};

export default HomePage;