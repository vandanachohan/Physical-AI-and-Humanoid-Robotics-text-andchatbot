/**
 * Test script for Urdu Translation System
 * 
 * This script tests the various components of the Urdu translation system
 * to ensure they work correctly.
 */

// Import the translation functions
import { convertToUrdu, translateDocument, validateTranslation } from './agents/skills/convert_to_urdu.js';
import UrduTranslationAgent from './agents/subagents/urdu_translation_agent.js';
import { translateText, translateDocument as translateContentBlock, translateTechnicalTerms } from './Physical-AI-Humanoid-Robotics/src/utils/translation.js';

async function runTests() {
  console.log('🧪 Running Urdu Translation System Tests...\n');

  // Test 1: Basic translation skill
  console.log('Test 1: Basic translation skill');
  try {
    const englishText = 'Introduction to Robotics and Physical AI';
    const urduTranslation = await convertToUrdu(englishText);
    console.log('✅ English:', englishText);
    console.log('✅ Urdu Translation:', urduTranslation);
    console.log('');
  } catch (error) {
    console.error('❌ Test 1 failed:', error);
  }

  // Test 2: Translation validation
  console.log('Test 2: Translation validation');
  try {
    const original = 'This is a test of the translation system';
    const translated = await convertToUrdu(original);
    const validation = validateTranslation(original, translated);
    console.log('✅ Original:', original);
    console.log('✅ Translated:', translated);
    console.log('✅ Validation:', validation);
    console.log('');
  } catch (error) {
    console.error('❌ Test 2 failed:', error);
  }

  // Test 3: Urdu Translation Agent
  console.log('Test 3: Urdu Translation Agent');
  try {
    const agent = new UrduTranslationAgent();
    const sectionData = {
      title: 'Introduction to Robotics',
      content: 'Robotics is an interdisciplinary branch of engineering and science that includes mechanical engineering, electrical engineering, computer science, and others.',
      summary: 'This section introduces fundamental concepts in robotics.'
    };
    
    const translatedSection = await agent.translateSection(sectionData);
    console.log('✅ Original title:', sectionData.title);
    console.log('✅ Translated title:', translatedSection.title);
    console.log('✅ Original content (first 50 chars):', sectionData.content.substring(0, 50) + '...');
    console.log('✅ Translated content (first 50 chars):', translatedSection.content.substring(0, 50) + '...');
    console.log('');
  } catch (error) {
    console.error('❌ Test 3 failed:', error);
  }

  // Test 4: Technical terms translation
  console.log('Test 4: Technical terms translation');
  try {
    const technicalText = 'Robotics involves sensors, actuators, and control systems for humanoid robots.';
    const translatedTechnical = translateTechnicalTerms(technicalText);
    console.log('✅ Original:', technicalText);
    console.log('✅ With translated terms:', translatedTechnical);
    console.log('');
  } catch (error) {
    console.error('❌ Test 4 failed:', error);
  }

  // Test 5: Document translation
  console.log('Test 5: Document translation');
  try {
    const document = {
      title: 'Chapter 1: Introduction to Physical AI',
      content: 'Physical AI combines artificial intelligence with physical systems to create robots that can understand, interact with, and adapt to the physical world.',
      sections: [
        {
          heading: 'Perception Systems',
          text: 'Sensors in robotics function similarly to human senses, providing the robot with information about its environment.'
        },
        {
          heading: 'Actuation Systems',
          text: 'Actuators are components that enable robots to move and interact with their environment, converting energy into mechanical motion.'
        }
      ]
    };
    
    const translatedDocument = await translateContentBlock(document);
    console.log('✅ Original title:', document.title);
    console.log('✅ Translated title:', translatedDocument.title);
    console.log('✅ Original first section heading:', document.sections[0].heading);
    console.log('✅ Translated first section heading:', translatedDocument.sections[0].heading);
    console.log('');
  } catch (error) {
    console.error('❌ Test 5 failed:', error);
  }

  console.log('🎉 Urdu Translation System Tests Completed!');
  console.log('\nNote: This system is ready for integration with a real translation API.');
  console.log('The mock translations show where real translations would appear.');
}

// Run the tests
runTests().catch(console.error);