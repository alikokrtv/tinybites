import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Wait a short time before showing the banner
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50 p-4 sm:p-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-gray-700 text-sm sm:text-base">
          <p>
            {t('cookies.message')}
            <a href="/privacy" className="text-pink-600 hover:underline ml-1">
              {t('cookies.learnMore')}
            </a>
          </p>
        </div>
        <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={acceptCookies}
            className="flex-1 sm:flex-none px-4 py-2 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 transition-colors"
          >
            {t('cookies.accept')}
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="flex-none p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
