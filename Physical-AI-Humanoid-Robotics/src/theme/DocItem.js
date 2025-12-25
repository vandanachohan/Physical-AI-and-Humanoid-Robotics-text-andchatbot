import React, { useState, useEffect } from 'react';
import OriginalDocItem from '@theme-original/DocItem';
import { useUser } from '../contexts/UserContext';
import { useTranslation } from '../contexts/TranslationContext';
import PersonalizationControls from '../components/PersonalizationControls';
import TranslationControls from '../components/TranslationControls';

const DocItem = (props) => {
  const { content: DocContent } = props;
  const { metadata } = DocContent;
  const { user } = useUser();
  const { translate, language } = useTranslation();
  const [personalizedContent, setPersonalizedContent] = useState('');
  const [originalContent, setOriginalContent] = useState('');

  // Extract the original content when component mounts
  useEffect(() => {
    // Extract text content from the DocContent object
    if (DocContent && DocContent.content) {
      const content = DocContent.content;
      if (typeof content === 'function') {
        // For MDX content, we need to render it to get the text
        const tempDiv = document.createElement('div');
        // This is a simplified approach - in a real implementation, 
        // we would need to properly extract content from the MDX
        setOriginalContent('Chapter content would be extracted here');
        setPersonalizedContent('Chapter content would be extracted here');
      } else {
        setOriginalContent(content || '');
        setPersonalizedContent(content || '');
      }
    }
  }, [DocContent]);

  // Update content when language changes
  useEffect(() => {
    if (language === 'ur') {
      // In a real implementation, we would translate the content
      // For now, we'll just show a placeholder
      setPersonalizedContent('اردو میں ترجمہ کردہ مواد یہاں ظاہر ہوگا');
    } else {
      setPersonalizedContent(originalContent);
    }
  }, [language, originalContent]);

  // Translate title if needed
  const translatedTitle = translate(metadata.title) || metadata.title;

  return (
    <div className="doc-item-wrapper">
      <div className="controls-container">
        <div className="top-controls">
          <TranslationControls />
        </div>
        
        <div className="personalization-section">
          <PersonalizationControls 
            chapterContent={originalContent}
            setPersonalizedContent={setPersonalizedContent}
          />
        </div>
      </div>
      
      <header className="doc-item-header">
        <h1 className="doc-item-title">{translatedTitle}</h1>
        {metadata.description && (
          <p className="doc-item-description">{metadata.description}</p>
        )}
      </header>
      
      <div className="doc-item-content">
        {/* In a real implementation, we would render the personalized/translated content */}
        <OriginalDocItem {...props} />
      </div>
    </div>
  );
};

export default DocItem;