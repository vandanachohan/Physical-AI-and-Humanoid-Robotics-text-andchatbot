/**
 * Translation Utility for Physical AI & Humanoid Robotics Textbook
 * 
 * This utility provides functions to translate content from English to Urdu
 * using the AI translation agent or external translation services.
 */

import { convertToUrdu } from '../../../agents/skills/convert_to_urdu.js';

/**
 * Translates a single text block from English to Urdu
 * @param {string} text - The text to translate
 * @returns {Promise<string>} - The translated text
 */
export const translateText = async (text) => {
  if (!text || typeof text !== 'string') {
    return text;
  }

  try {
    // Use the convertToUrdu skill we created earlier
    const translated = await convertToUrdu(text, {
      preserveTechnicalTerms: true,
      useParentheses: true,
      level: 'technical'
    });
    
    return translated;
  } catch (error) {
    console.error('Translation error:', error);
    // Return original text if translation fails
    return text;
  }
};

/**
 * Translates an entire document object
 * @param {object} document - The document to translate
 * @returns {Promise<object>} - The translated document
 */
export const translateDocument = async (document) => {
  if (!document || typeof document !== 'object') {
    return document;
  }

  const translatedDoc = { ...document };

  // Translate all string properties of the document
  for (const [key, value] of Object.entries(document)) {
    if (typeof value === 'string') {
      translatedDoc[key] = await translateText(value);
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      translatedDoc[key] = await translateDocument(value);
    } else if (Array.isArray(value)) {
      translatedDoc[key] = await Promise.all(
        value.map(async (item) => {
          if (typeof item === 'string') {
            return await translateText(item);
          } else if (typeof item === 'object' && item !== null) {
            return await translateDocument(item);
          }
          return item;
        })
      );
    }
  }

  return translatedDoc;
};

/**
 * Translates a content block (like a chapter or section)
 * @param {object} contentBlock - The content block to translate
 * @returns {Promise<object>} - The translated content block
 */
export const translateContentBlock = async (contentBlock) => {
  if (!contentBlock || typeof contentBlock !== 'object') {
    return contentBlock;
  }

  // If contentBlock is a string, translate it directly
  if (typeof contentBlock === 'string') {
    return await translateText(contentBlock);
  }

  // Otherwise, it's an object with various content properties
  const translatedBlock = { ...contentBlock };

  // Common content properties to translate
  const contentProps = ['title', 'description', 'content', 'summary', 'body', 'text'];

  for (const prop of contentProps) {
    if (contentBlock[prop]) {
      if (typeof contentBlock[prop] === 'string') {
        translatedBlock[prop] = await translateText(contentBlock[prop]);
      } else {
        translatedBlock[prop] = await translateDocument(contentBlock[prop]);
      }
    }
  }

  return translatedBlock;
};

/**
 * Predefined technical terms translation for consistency
 */
export const technicalTerms = {
  'robotics': 'روبوٹکس',
  'humanoid': 'ہیومنوائڈ',
  'embodied intelligence': 'ایمبوڈیڈ انٹیلی جنس',
  'sensors': 'سینسرز',
  'actuators': 'ایکچوایٹرز',
  'locomotion': 'لوکوموشن',
  'perception': 'ادراک',
  'machine learning': 'مشین لرننگ',
  'reinforcement learning': 'رینفورسمنٹ لرننگ',
  'planning': 'پلاننگ',
  'control': 'کنٹرول',
  'algorithm': 'الگورتھم',
  'artificial intelligence': 'مصنوعی ذہانت',
  'physical ai': 'فزکل ای آئی',
  'robot': 'روبوٹ',
  'ai': 'ای آئی',
  'neural networks': 'نیورل نیٹ ورکس',
  'computer vision': 'کمپیوٹر وژن',
  'natural language processing': 'نیچرل لینگویج پروسیسنگ',
  'motion planning': 'موشن پلاننگ',
  'path planning': 'پاتھ پلاننگ',
  'kinematics': 'کنیمیٹکس',
  'dynamics': 'ڈائی نامکس',
  'inverse kinematics': 'انورس کنیمیٹکس',
  'forward kinematics': 'فارورڈ کنیمیٹکس',
  'gait': 'گیٹ',
  'balance control': 'بیلنس کنٹرول',
  'stability': 'سٹیبیلٹی',
  'bipedal': 'بائی پیڈل',
  'quadruped': 'کواڈروپیڈ',
  'manipulation': 'مینیپولیشن',
  'grasping': 'گریسنگ',
  'grasp': 'گریسپ',
  'end effector': 'اینڈ ایفیکٹر',
  'degrees of freedom': 'ڈگریز آف فریڈم',
  'dof': 'ڈی او ایف',
  'ros': 'آر او ایس',
  'robot operating system': 'روبوٹ آپریٹنگ سسٹم',
  'simulation': 'سیمولیشن',
  'gazebo': 'گزیبو',
  'control systems': 'کنٹرول سسٹمز',
  'feedback control': 'فیڈ بیک کنٹرول',
  'pid controller': 'پی آئی ڈی کنٹرولر',
  'trajectory': 'ٹریجکٹری',
  'trajectory planning': 'ٹریجکٹری پلاننگ',
  'motion control': 'موشن کنٹرول',
  'force control': 'فورس کنٹرول',
  'impedance control': 'ایمپیڈنس کنٹرول',
  'admittance control': 'ایڈمیٹنس کنٹرول',
  'human robot interaction': 'ہیومن روボٹ انٹرایکشن',
  'hri': 'ایچ آر آئی',
  'ethics': 'اخلاقیات',
  'robot ethics': 'روبوٹ اخلاقیات',
  'safety': 'سیفٹی',
  'robot safety': 'روبوٹ سیفٹی',
  'autonomy': 'آٹونومی',
  'autonomous': 'آٹونومس',
  'navigation': 'نیویگیشن',
  'mapping': 'میپنگ',
  'slam': 'ایس ایل اے ایم',
  'simultaneous localization and mapping': 'ایک ساتھ لوکلائزیشن اور میپنگ',
  'computer vision': 'کمپیوٹر وژن',
  'object recognition': 'آبجیکٹ ریکوگنیشن',
  'object detection': 'آبجیکٹ ڈیٹیکشن',
  'machine learning': 'مشین لرننگ',
  'deep learning': 'ڈیپ لرننگ',
  'neural networks': 'نیورل نیٹ ورکس',
  'reinforcement learning': 'رینفورسمنٹ لرننگ',
  'supervised learning': 'سوپروائزڈ لرننگ',
  'unsupervised learning': 'انسوپروائزڈ لرننگ',
  'training': 'ٹریننگ',
  'dataset': 'ڈیٹا سیٹ',
  'model': 'ماڈل',
  'algorithm': 'الگورتھم',
  'optimization': 'آپٹیمائزیشن',
  'control theory': 'کنٹرول تھیوری',
  'state space': 'اسٹیٹ سپیس',
  'state estimation': 'اسٹیٹ اسٹیمیشن',
  'kalman filter': 'کیلمن فلٹر',
  'particle filter': 'پارٹیکل فلٹر',
  'sensor fusion': 'سینسر فیوژن',
  'hardware': 'ہارڈ ویئر',
  'software': 'سافٹ ویئر',
  'electronics': 'الیکٹرانکس',
  'motors': 'موٹرز',
  'batteries': 'بیٹریز',
  'power systems': 'پاور سسٹمز',
  'energy efficiency': 'انرجی ایفیشنسی',
  'actuator': 'ایکچوایٹر',
  'servo': 'سر وو',
  'stepper motor': 'سٹیپر موٹر',
  'encoder': 'اینکوڈر',
  'gyroscope': 'جیرو سکوپ',
  'accelerometer': 'ایکسیلرو میٹر',
  'lidar': 'لائیڈار',
  'camera': 'کیمرہ',
  'imu': 'آئی ایم یو',
  'inertial measurement unit': 'انیشل میزرمینٹ یونٹ'
};

/**
 * Translates technical terms in text using the predefined mapping
 * @param {string} text - The text containing technical terms
 * @returns {string} - The text with translated technical terms
 */
export const translateTechnicalTerms = (text) => {
  if (!text || typeof text !== 'string') {
    return text;
  }

  let translatedText = text;

  // Sort terms by length (descending) to avoid partial replacements
  const sortedTerms = Object.keys(technicalTerms).sort((a, b) => b.length - a.length);

  for (const term of sortedTerms) {
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    translatedText = translatedText.replace(regex, `${technicalTerms[term]} (${term})`);
  }

  return translatedText;
};