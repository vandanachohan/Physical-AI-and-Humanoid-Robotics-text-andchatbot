import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage, isTranslating } = useTranslation();

  return (
    <div className="language-toggle">
      <button
        onClick={toggleLanguage}
        disabled={isTranslating}
        className={`lang-btn ${currentLanguage === 'ur' ? 'active' : ''}`}
        aria-label={`Switch to ${currentLanguage === 'en' ? 'Urdu' : 'English'}`}
      >
        {isTranslating ? 'Translating...' : currentLanguage === 'ur' ? 'اُردو' : 'English'}
      </button>
      <style jsx>{`
        .language-toggle {
          display: flex;
          align-items: center;
          margin-left: 1rem;
        }
        
        .lang-btn {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
          direction: ltr;
        }
        
        .lang-btn:hover {
          background: #4338ca;
        }
        
        .lang-btn:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }
        
        .lang-btn.active {
          background: #3730a3;
        }
      `}</style>
    </div>
  );
};

export default LanguageToggle;