import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };
  
  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-gray-700 hover:text-primary-600 transition-colors px-3 py-2 rounded-full bg-white/80 hover:bg-white shadow-sm"
    >
      <Globe size={16} />
      <span className="text-sm font-medium uppercase">{language === 'en' ? 'TR' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;