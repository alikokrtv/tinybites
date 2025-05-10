import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      id: 'quality',
      name: t('about.values.quality'),
      description: 'We create durable products that stand up to daily use.',
      icon: '✓',
      color: 'bg-blue-100',
      iconColor: 'text-blue-500'
    },
    {
      id: 'safety',
      name: t('about.values.safety'),
      description: 'All our products meet the highest safety standards.',
      icon: '🛡️',
      color: 'bg-green-100',
      iconColor: 'text-green-500'
    },
    {
      id: 'fun',
      name: t('about.values.fun'),
      description: 'Our colorful designs make mealtime enjoyable for kids.',
      icon: '🎨',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-500'
    },
    {
      id: 'sustainability',
      name: t('about.values.sustainability'),
      description: 'We\'re committed to sustainable materials and practices.',
      icon: '🌱',
      color: 'bg-green-100',
      iconColor: 'text-green-500'
    }
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('about.title')}
          </h1>
          <div className="h-1 w-20 bg-pink-500 mx-auto"></div>
        </AnimatedSection>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection animation="slide-in-left">
            <img 
              src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Our story" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {t('home.about.title')}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Tiny Bites was born from a simple idea: mealtime should be fun, safe, and colorful for children. Our founder, a parent of two young children, was frustrated with the limited options for children's tableware that were both functional and appealing to kids.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We started designing our own line of tableware that combines playful designs with practical features that make parents' lives easier. From there, we expanded into storage solutions and baskets, all designed with children in mind.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Tiny Bites is loved by families around the world who share our belief that everyday items for children can be both beautiful and practical.
            </p>
          </AnimatedSection>
        </div>
        
        {/* Our Mission */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="bg-pink-50 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              {t('about.mission.title')}
            </h2>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              {t('about.mission.description')}
            </p>
          </div>
        </AnimatedSection>
        
        {/* Our Values */}
        <AnimatedSection animation="fade-up" className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('about.values.title')}
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {values.map((value, index) => (
            <AnimatedSection 
              key={value.id} 
              animation="fade-up" 
              delay={index * 100}
              className={`${value.color} rounded-xl p-6 transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-start">
                <div className={`text-3xl ${value.iconColor} mr-4`}>
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {value.name}
                  </h3>
                  <p className="text-gray-700">
                    {value.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Team Photo */}
        <AnimatedSection animation="fade-up" className="mt-16">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Our team" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="text-white p-6 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Team</h3>
                <p className="text-white/90 max-w-lg">
                  A dedicated group of designers and parents committed to creating products that bring joy to families everywhere.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;