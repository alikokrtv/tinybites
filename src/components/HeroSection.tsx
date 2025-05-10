import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/tiny-bites/LV-112.jpg" 
          alt="Renklerle Yemek Saatini Eğlenceli Hale Getirmek" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/70 to-blue-500/70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t('home.hero.title')}
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl mb-8">{t('home.hero.subtitle')}</p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={600}>
            <Link 
              to="/products" 
              className="bg-white text-pink-600 hover:bg-pink-100 px-8 py-3 rounded-full font-medium text-lg inline-block transition-colors duration-300"
            >
              {t('home.hero.cta')}
            </Link>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;