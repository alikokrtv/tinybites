import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  
  // Story content in both languages
  const storyContent = {
    en: {
      paragraph1: "Tiny Bites was born from a simple idea: mealtime should be fun, safe, and colorful for children. Our founder, a parent of two young children, was frustrated with the limited options for children's tableware that were both functional and appealing to kids.",
      paragraph2: "We started designing our own line of tableware that combines playful designs with practical features that make parents' lives easier. From there, we expanded into storage solutions and baskets, all designed with children in mind.",
      paragraph3: "Today, Tiny Bites is loved by families around the world who share our belief that everyday items for children can be both beautiful and practical."
    },
    tr: {
      paragraph1: "Tiny Bites basit bir fikirden doğdu: yemek zamanı çocuklar için eğlenceli, güvenli ve renkli olmalıdır. Kurucumuz, iki küçük çocuğun ebeveyni, hem işlevsel hem de çocuklar için çekici olan çocuk sofra takımı seçeneklerinin sınırlı olmasından dolayı hayal kırıklığına uğradı.",
      paragraph2: "Eğlenceli tasarımları, ebeveynlerin hayatını kolaylaştıran pratik özelliklerle birleştiren kendi sofra takımı serimizi tasarlamaya başladık. Oradan, hepsi çocuklar düşünülerek tasarlanmış depolama çözümleri ve sepetlere genişledik.",
      paragraph3: "Bugün, Tiny Bites, çocuklar için günlük eşyaların hem güzel hem de pratik olabileceği inancımızı paylaşan dünyanın dört bir yanındaki aileler tarafından sevilmektedir."
    }
  };
  
  const values = [
    {
      id: 'quality',
      name: {
        en: 'Quality',
        tr: 'Kalite'
      },
      description: {
        en: 'We create durable products that stand up to daily use.',
        tr: 'Günlük kullanıma dayanıklı ürünler üretiyoruz.'
      },
      icon: '✓',
      color: 'bg-blue-100',
      iconColor: 'text-blue-500'
    },
    {
      id: 'safety',
      name: {
        en: 'Safety',
        tr: 'Güvenlik'
      },
      description: {
        en: 'All our products meet the highest safety standards.',
        tr: 'Tüm ürünlerimiz en yüksek güvenlik standartlarını karşılar.'
      },
      icon: '🛡️',
      color: 'bg-green-100',
      iconColor: 'text-green-500'
    },
    {
      id: 'fun',
      name: {
        en: 'Fun',
        tr: 'Eğlence'
      },
      description: {
        en: 'Our colorful designs make mealtime enjoyable for kids.',
        tr: 'Renkli tasarımlarımız yemek saatini çocuklar için keyifli hale getirir.'
      },
      icon: '🎨',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-500'
    },
    {
      id: 'sustainability',
      name: {
        en: 'Sustainability',
        tr: 'Sürdürülebilirlik'
      },
      description: {
        en: "We're committed to sustainable materials and practices.",
        tr: 'Sürdürülebilir malzeme ve uygulamalara bağlıyız.'
      },
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
              src="/images/tiny-bites/elephant-tableware-1.jpg" 
              alt="Our story" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {t('language') === 'tr' ? 'Hikayemiz' : 'Our Story'}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {storyContent[t('language') === 'tr' ? 'tr' : 'en'].paragraph1}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {storyContent[t('language') === 'tr' ? 'tr' : 'en'].paragraph2}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {storyContent[t('language') === 'tr' ? 'tr' : 'en'].paragraph3}
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
            {t('language') === 'tr' ? 'Değerlerimiz' : 'Our Values'}
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
                    {value.name[t('language') === 'tr' ? 'tr' : 'en']}
                  </h3>
                  <p className="text-gray-700">
                    {value.description[t('language') === 'tr' ? 'tr' : 'en']}
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
              src="/images/storage-boxes/lv-237-shell.jpg" 
              alt="Our products" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="text-white p-6 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {t('language') === 'tr' ? 'Ekibimiz' : 'Our Team'}
                </h3>
                <p className="text-white/90 max-w-lg">
                  {t('language') === 'tr' 
                    ? 'Her yerde ailelere mutluluk getiren ürünler yaratmaya kendini adamış, tasarımcılar ve ebeveynlerden oluşan özel bir ekip.' 
                    : 'A dedicated group of designers and parents committed to creating products that bring joy to families everywhere.'}
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