/**
 * Urdu Translation Skill
 * 
 * This skill provides functionality to convert English text to Urdu
 * specifically for the Physical AI & Humanoid Robotics textbook.
 * It handles technical terminology and maintains the meaning of
 * complex robotics and AI concepts.
 */

/**
 * Converts English text to Urdu
 * @param {string} englishText - The English text to convert
 * @param {object} options - Additional options for translation
 * @returns {string} - The translated Urdu text
 */
async function convertToUrdu(englishText, options = {}) {
  // Validate input
  if (!englishText || typeof englishText !== 'string') {
    throw new Error('English text is required and must be a string');
  }

  // Extract options
  const {
    preserveTechnicalTerms = true,  // Whether to preserve technical terms in English
    useParentheses = true,          // Whether to use parentheses for English terms
    level = 'technical'             // Level of technicality (basic, intermediate, technical)
  } = options;

  // In a real implementation, this would call an AI translation service
  // For now, we'll return a mock translation with proper structure
  
  // For demonstration purposes, here's a basic mapping of some common robotics terms
  const technicalTerms = {
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

  // Replace technical terms in the text
  let urduText = englishText;
  
  // Sort terms by length (descending) to avoid partial replacements
  const sortedTerms = Object.keys(technicalTerms).sort((a, b) => b.length - a.length);
  
  for (const term of sortedTerms) {
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    if (preserveTechnicalTerms && useParentheses) {
      urduText = urduText.replace(regex, `${technicalTerms[term]} (${term})`);
    } else {
      urduText = urduText.replace(regex, technicalTerms[term]);
    }
  }

  // For a real implementation, we would call an AI translation service here
  // This is a simplified version that just adds a prefix to indicate it's a mock translation
  return `[MOCK URDU TRANSLATION]\n${urduText}\n[TRANSLATION END]`;
}

/**
 * Translates an entire document from English to Urdu
 * @param {object} document - The document to translate with content, title, etc.
 * @returns {object} - The translated document
 */
async function translateDocument(document) {
  const translatedDoc = { ...document };
  
  if (document.title) {
    translatedDoc.title = await convertToUrdu(document.title);
  }
  
  if (document.content) {
    translatedDoc.content = await convertToUrdu(document.content);
  }
  
  if (document.description) {
    translatedDoc.description = await convertToUrdu(document.description);
  }
  
  if (document.summary) {
    translatedDoc.summary = await convertToUrdu(document.summary);
  }
  
  return translatedDoc;
}

/**
 * Validates that the translation is appropriate for the textbook
 * @param {string} original - Original English text
 * @param {string} translated - Translated Urdu text
 * @returns {object} - Validation results
 */
function validateTranslation(original, translated) {
  const results = {
    isValid: true,
    issues: [],
    qualityScore: 0
  };

  // Check if translation contains placeholder text
  if (translated.includes('[MOCK URDU TRANSLATION]')) {
    results.issues.push('Translation contains placeholder text - real translation service needed');
    results.isValid = false;
  }

  // Check for basic quality metrics
  if (original && translated) {
    // Calculate a basic quality score based on length similarity
    const lengthRatio = translated.length / original.length;
    
    // If translation is significantly shorter, it might be incomplete
    if (lengthRatio < 0.3) {
      results.issues.push('Translation is significantly shorter than original, may be incomplete');
    }
    
    // If translation is significantly longer, it might have extra content
    if (lengthRatio > 3) {
      results.issues.push('Translation is significantly longer than original, may have extra content');
    }
    
    // Calculate quality score (simplified)
    results.qualityScore = Math.min(100, Math.floor(Math.abs(1 - Math.abs(1 - lengthRatio)) * 100));
  }

  return results;
}

module.exports = {
  convertToUrdu,
  translateDocument,
  validateTranslation
};