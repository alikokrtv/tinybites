import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  
  // Use the same story content as the homepage
  
  const values = [
    {
      id: 'safety-health',
      name: {
        en: 'Safety and Health',
        tr: 'Güvenlik ve Sağlık'
      },
      description: {
        en: 'We never use any materials harmful to human health in our products. Safety is our priority, especially in children\'s products.',
        tr: 'Ürünlerimizde insan sağlığına zararlı hiçbir maddeye yer vermeyiz. Özellikle çocuk ürünlerinde güvenlik önceliğimizdir.'
      },
      icon: '🛡️',
      color: 'bg-red-50',
      iconColor: 'text-red-500'
    },
    {
      id: 'quality-durability',
      name: {
        en: 'Quality and Durability',
        tr: 'Kalite ve Dayanıklılık'
      },
      description: {
        en: 'We produce all our products to high quality standards to enhance user experience and satisfaction.',
        tr: 'Kullanıcı deneyimini ve memnuniyetini artırmak için her ürünümüzü yüksek kalite standartlarında üretiriz.'
      },
      icon: '✓',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'functionality-design',
      name: {
        en: 'Functionality and Design',
        tr: 'Fonksiyonellik ve Tasarım'
      },
      description: {
        en: 'We value ease of use as much as aesthetics. Our products should both look good and be useful.',
        tr: 'Estetik kadar kullanım kolaylığına da önem veririz. Ürünlerimiz hem güzel görünmeli hem işe yaramalı.'
      },
      icon: '🎨',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'sincerity-responsibility',
      name: {
        en: 'Sincerity and Responsibility',
        tr: 'Samimiyet ve Sorumluluk'
      },
      description: {
        en: 'We offer sincere and reliable solutions to parents with Tiny Bites and to homes with Loren Plastic. We consider our environmental and social responsibility at every stage of production.',
        tr: 'Tiny Bites ile ebeveynlere, Loren Plastic ile evlere samimi ve güvenilir çözümler sunarız. Üretimin her aşamasında çevresel ve toplumsal sorumluluğumuzu göz önünde bulundururuz.'
      },
      icon: '🤝',
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'innovation',
      name: {
        en: 'Innovation',
        tr: 'Yenilikçilik'
      },
      description: {
        en: 'We think with a focus on continuous development and design to quickly adapt to changing needs and make our users\' lives even easier.',
        tr: 'Değişen ihtiyaçlara hızlıca uyum sağlamak ve kullanıcılarımızın hayatını daha da kolaylaştırmak için sürekli gelişim ve tasarım odaklı düşünürüz.'
      },
      icon: '💡',
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    }
  ];
  
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('about.title')}
          </h1>
          <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
        </AnimatedSection>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection animation="slide-in-left">
            <img 
              src="/images/tiny-bites/elephant-tableware-1.jpg" 
              alt="Our story" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {t('language') === 'tr' ? 'Hikayemiz' : 'Our Story'}
            </h2>
            <div className="prose prose-lg max-w-none">
              {t('home.story.content').split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
        
        {/* Our Mission */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 md:p-12 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              {t('language') === 'tr' ? 'Misyonumuz' : 'Our Mission'}
            </h2>
            
            {t('language') === 'tr' ? (
              <div className="space-y-4 max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Loren Plastic olarak, her yaştan kullanıcı için kaliteli, güvenli ve estetik plastik ürünler üretmeyi; günlük yaşamı kolaylaştıran, işlevsel ve uzun ömürlü çözümler sunmayı misyon edindik.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Tiny Bites markamız ile çocukların gelişimini destekleyen, eğlenceli ve güvenli mama ürünleri tasarlarken; Loren Plastic markamızla yaşam alanlarına şıklık ve düzen katan dekoratif plastik ürünler sunuyoruz.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  İhtiyaca özel çözümlerle hem çocukların hem yetişkinlerin hayatına değer katmak için çalışıyoruz.
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Loren Plastic, we've made it our mission to produce quality, safe, and aesthetic plastic products for users of all ages; offering functional and durable solutions that make daily life easier.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  While our Tiny Bites brand designs fun and safe tableware products that support children's development, our Loren Plastic brand offers decorative plastic products that add elegance and order to living spaces.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We work to add value to the lives of both children and adults with customized solutions for various needs.
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>
        
        {/* Our Values */}
        <AnimatedSection animation="fade-up" className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {t('language') === 'tr' ? 'Değerlerimiz' : 'Our Values'}
            </h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection 
                key={value.id} 
                animation="fade-up" 
                delay={index * 100}
                className={`${value.color} rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <div className={`text-4xl ${value.iconColor} mb-4 bg-white p-4 rounded-full shadow-sm`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {value.name[t('language') === 'tr' ? 'tr' : 'en']}
                  </h3>
                </div>
                <p className="text-gray-700 text-center">
                  {value.description[t('language') === 'tr' ? 'tr' : 'en']}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
        

      </div>
    </div>
  );
};

export default AboutPage;