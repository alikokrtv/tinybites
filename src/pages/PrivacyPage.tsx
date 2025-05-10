import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('privacy.title')}
          </h1>
          <p className="text-gray-500">
            {t('privacy.lastUpdated')} May 10, 2025
          </p>
        </div>
        
        <div className="prose prose-pink max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            {t('privacy.intro')}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {t('language') === 'tr' ? 'Topladığımız Bilgiler' : 'Information We Collect'}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('language') === 'tr' 
              ? 'Web sitemizi ziyaret ettiğinizde, cihazınız, tarayıcı türü, IP adresi, siteyi ziyaret ettiğiniz zaman ve görüntülediğiniz sayfalar dahil olmak üzere belirli bilgileri otomatik olarak toplarız.' 
              : 'When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.'}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {t('language') === 'tr' ? 'Çerezler' : 'Cookies'}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('language') === 'tr'
              ? 'Web sitemizde deneyiminizi geliştirmek için çerezleri kullanıyoruz. Çerezler, tarayıcınız tarafından cihazınızda saklanan küçük veri parçalarıdır. Çerezleri, web sitemizin düzgün çalışmasını sağlamak ve web sitemizdeki trafiği analiz etmek için kullanırız.'
              : 'We use cookies to improve your experience on our website. Cookies are small pieces of data stored on your device by your browser. We use cookies to ensure that our website functions properly and to analyze traffic on our website.'}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {t('language') === 'tr' ? 'Bilgileri Nasıl Kullanıyoruz' : 'How We Use Your Information'}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('language') === 'tr'
              ? 'Topladığımız bilgileri, web sitemizi geliştirmek, müşteri hizmetleri sağlamak ve yasal yükümlülüklerimizi yerine getirmek için kullanırız. Kişisel bilgilerinizi pazarlama amaçlı kullanmak için açık izninizi alırız.'
              : 'We use the information we collect to improve our website, provide customer service, and comply with our legal obligations. We will obtain your explicit consent before using your personal information for marketing purposes.'}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {t('language') === 'tr' ? 'Bilgilerinizin Paylaşılması' : 'Sharing Your Information'}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('language') === 'tr'
              ? 'Kişisel bilgilerinizi, yasalar gerektirdiğinde veya haklarımızı korumak için paylaşabiliriz. Bilgilerinizi açık izniniz olmadan üçüncü taraflarla pazarlama amaçlı paylaşmayız.'
              : 'We may share your personal information when required by law or to protect our rights. We do not share your information with third parties for marketing purposes without your explicit consent.'}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {t('language') === 'tr' ? 'Haklarınız' : 'Your Rights'}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('language') === 'tr'
              ? 'Kişisel verilerinize erişme, düzeltme, silme veya işlenmesini kısıtlama hakkına sahipsiniz. Bu haklarınızı kullanmak için lütfen bizimle iletişime geçin.'
              : 'You have the right to access, correct, delete, or restrict the processing of your personal data. Please contact us to exercise these rights.'}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {t('language') === 'tr' ? 'Değişiklikler' : 'Changes'}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('language') === 'tr'
              ? 'Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Değişiklikler yaptığımızda, web sitemize yeni politika ekleyeceğiz.'
              : 'We may update this privacy policy from time to time. When we make changes, we will post the new policy on our website.'}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {t('language') === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('language') === 'tr'
              ? 'Bu gizlilik politikası veya kişisel verilerinizle ilgili herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin.'
              : 'If you have any questions about this privacy policy or your personal data, please contact us.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
