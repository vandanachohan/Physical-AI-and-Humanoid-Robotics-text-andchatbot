import React, { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';

const PersonalizationControls = ({ chapterContent, setPersonalizedContent }) => {
  const { user } = useUser();
  const [personalizationEnabled, setPersonalizationEnabled] = useState(false);
  const [contentVersion, setContentVersion] = useState('default');

  useEffect(() => {
    if (user && user.background) {
      setPersonalizationEnabled(true);
    }
  }, [user]);

  const handlePersonalizeToggle = () => {
    if (!user) {
      alert('Please sign in to enable personalization');
      return;
    }
    setPersonalizationEnabled(!personalizationEnabled);
  };

  const handleContentVersionChange = (version) => {
    setContentVersion(version);
    if (personalizationEnabled) {
      applyPersonalization(version);
    } else {
      setPersonalizedContent(chapterContent);
    }
  };

  const applyPersonalization = (version) => {
    if (!user || !user.background) {
      setPersonalizedContent(chapterContent);
      return;
    }

    // Apply personalization based on user's background
    let personalized = chapterContent;

    // If user has software background, emphasize software aspects
    if (user.background.software && user.background.software.toLowerCase().includes('software')) {
      if (version === 'software-focused') {
        // Replace or emphasize software-related content
        personalized = chapterContent.replace(
          /physical concepts/gi,
          'software implementation of physical concepts'
        );
        personalized = personalized.replace(
          /hardware components/gi,
          'software components and algorithms'
        );
      }
    }

    // If user has hardware background, emphasize hardware aspects
    if (user.background.hardware && user.background.hardware.toLowerCase().includes('hardware')) {
      if (version === 'hardware-focused') {
        // Replace or emphasize hardware-related content
        personalized = chapterContent.replace(
          /software algorithms/gi,
          'hardware implementations and circuits'
        );
        personalized = personalized.replace(
          /code-based solutions/gi,
          'hardware-based solutions'
        );
      }
    }

    // Adjust complexity based on experience level
    if (user.background.experienceLevel === 'beginner') {
      // Simplify content for beginners
      personalized = simplifyContent(personalized);
    } else if (user.background.experienceLevel === 'expert') {
      // Add more advanced content for experts
      personalized = addAdvancedContent(personalized);
    }

    setPersonalizedContent(personalized);
  };

  // Helper function to simplify content for beginners
  const simplifyContent = (content) => {
    // Add simpler explanations and examples
    return content
      .replace(/complex algorithm/gi, 'algorithm')
      .replace(/advanced technique/gi, 'technique')
      .replace(/sophisticated system/gi, 'system');
  };

  // Helper function to add advanced content for experts
  const addAdvancedContent = (content) => {
    // Add more detailed technical information
    return content
      .replace(/system/gi, 'advanced system with sophisticated algorithms')
      .replace(/technique/gi, 'advanced technique with mathematical foundations');
  };

  return (
    <div className="personalization-controls">
      <div className="toggle-section">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={personalizationEnabled}
            onChange={handlePersonalizeToggle}
            disabled={!user}
          />
          <span className="toggle-slider"></span>
          <span className="toggle-text">
            {user ? 'Enable Personalization' : 'Sign in to Enable Personalization'}
          </span>
        </label>
      </div>

      {personalizationEnabled && user && (
        <div className="personalization-options">
          <h4>Personalize for your background:</h4>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="contentVersion"
                value="default"
                checked={contentVersion === 'default'}
                onChange={() => handleContentVersionChange('default')}
              />
              <span className="radio-text">Default Content</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="contentVersion"
                value="software-focused"
                checked={contentVersion === 'software-focused'}
                onChange={() => handleContentVersionChange('software-focused')}
              />
              <span className="radio-text">Software Focused</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="contentVersion"
                value="hardware-focused"
                checked={contentVersion === 'hardware-focused'}
                onChange={() => handleContentVersionChange('hardware-focused')}
              />
              <span className="radio-text">Hardware Focused</span>
            </label>
          </div>
          
          <div className="user-info">
            <p><strong>Your Background:</strong></p>
            <p><em>Software:</em> {user.background.software || 'Not specified'}</p>
            <p><em>Hardware:</em> {user.background.hardware || 'Not specified'}</p>
            <p><em>Experience:</em> {user.background.experienceLevel || 'Not specified'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalizationControls;