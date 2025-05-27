import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { translations } from '../data/translations';

export type Language = 'tr' | 'en';

// Using string for translation keys to avoid TypeScript errors with dynamically added keys
type TranslationKey = string;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');
  
  useEffect(() => {
    // On mount or language change, log available translations
    console.log('Current language:', language);
    console.log('Available translation keys:', Object.keys(translations[language] || {}).length);
  }, [language]);

  const t = (key: TranslationKey): string => {
    try {
      // Direct access to current language translations
      const currentLangTranslations = translations[language] as Record<string, string>;
      if (currentLangTranslations && typeof currentLangTranslations[key] === 'string') {
        return currentLangTranslations[key];
      }
      
      // Fallback to English
      const englishTranslations = translations.en as Record<string, string>;
      if (englishTranslations && typeof englishTranslations[key] === 'string') {
        return englishTranslations[key];
      }
      
      // Log missing translation
      console.warn(`Translation missing for key: "${key}" in language: ${language}`);
      return key; // Return key as fallback
    } catch (error) {
      console.error('Translation error:', error);
      return key; // Return key as fallback in case of any error
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};