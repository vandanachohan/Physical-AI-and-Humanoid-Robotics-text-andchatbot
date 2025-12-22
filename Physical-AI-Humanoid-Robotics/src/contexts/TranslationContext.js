import React, { createContext, useContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

// Mock translation function - in a real app, this would connect to a translation API
const mockTranslate = (text, targetLang) => {
  if (targetLang === 'ur') {
    // For demo purposes, we'll return the English text with a note that it would be translated
    return `${text} [URDU TRANSLATION PLACEHOLDER]`;
  }
  return text;
};

export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  // Function to toggle between languages
  const toggleLanguage = () => {
    setCurrentLanguage(prevLang => prevLang === 'en' ? 'ur' : 'en');
  };

  // Function to translate text
  const translateText = async (text) => {
    if (currentLanguage === 'en') {
      return text; // Return as is if English
    }
    
    setIsTranslating(true);
    try {
      // In a real implementation, this would call a translation API
      const translated = mockTranslate(text, currentLanguage);
      return translated;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text if translation fails
    } finally {
      setIsTranslating(false);
    }
  };

  // Function to translate content blocks
  const translateContent = async (content) => {
    if (currentLanguage === 'en') {
      return content;
    }

    if (typeof content === 'string') {
      return await translateText(content);
    }

    if (Array.isArray(content)) {
      return await Promise.all(content.map(item => translateContent(item)));
    }

    if (typeof content === 'object' && content !== null) {
      const translatedObj = {};
      for (const [key, value] of Object.entries(content)) {
        translatedObj[key] = await translateContent(value);
      }
      return translatedObj;
    }

    return content;
  };

  return (
    <TranslationContext.Provider 
      value={{ 
        currentLanguage, 
        toggleLanguage, 
        translateText, 
        translateContent,
        isTranslating 
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};