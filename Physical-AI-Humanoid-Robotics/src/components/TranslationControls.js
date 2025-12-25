import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const TranslationControls = () => {
  const { language, toggleLanguage } = useTranslation();

  return (
    <div className="translation-controls">
      <button 
        className={`language-toggle ${language === 'ur' ? 'active' : ''}`}
        onClick={toggleLanguage}
        aria-label={language === 'ur' ? 'Switch to English' : 'Switch to Urdu'}
      >
        {language === 'ur' ? 'EN' : 'اردو'}
      </button>
      <span className="language-label">
        {language === 'ur' ? 'اردو' : 'English'}
      </span>
    </div>
  );
};

export default TranslationControls;