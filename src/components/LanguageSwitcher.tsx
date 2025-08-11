import { Button } from 'antd';
import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../contexts/LanguageContext';
import styles from '../styles/components/LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    {
      code: 'vi' as Language,
      name: 'VI',
      flag: '🇻🇳',
    },
    {
      code: 'en' as Language,
      name: 'EN',
      flag: '🇺🇸',
    },
  ];

  return (
    <div className={styles.languageSwitcher}>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          type="text"
          size="small"
          className={`${styles.flagButton} ${language === lang.code ? styles.active : ''}`}
          onClick={() => setLanguage(lang.code)}
        >
          <span className={styles.flag}>{lang.flag}</span>
          <span className={styles.languageText}>{lang.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
