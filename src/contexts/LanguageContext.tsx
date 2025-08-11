import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import { vietnameseTranslations, englishTranslations } from '../utils/translations';
import type { Translation } from '../utils/translations';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  translations: Translation;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export { LanguageContext };

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const translations = language === 'vi' ? vietnameseTranslations : englishTranslations;

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
