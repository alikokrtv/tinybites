import React, { createContext, useState, useContext, ReactNode } from 'react';
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

  const t = (key: TranslationKey): string => {
    // Using type assertion to handle dynamic keys
    return (translations[language] as Record<string, string>)[key] || 
           (translations.en as Record<string, string>)[key] || 
           key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};