import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

// Basic English to Urdu translations for common terms
const urduTranslations = {
  // Chapter titles
  'Introduction to Physical AI': 'فزکل ای کا تعارف',
  'The Evolution of Robotics and Humanoid Systems': 'روبوٹکس اور ہیومنوائڈ سسٹمز کی ترقی',
  'Fundamental Concepts of Embodied Intelligence': 'ایمبوڈیڈ انٹیلی جنس کے بنیادی تصورات',
  'Sensors, Actuators, and Physical Interaction': 'سینسرز، ایکچو ایٹرز، اور جسمانی تعامل',
  'Humanoid Body Architecture': 'ہیومنوائڈ باڈی آرکیٹیکچر',
  'Locomotion Systems (Walking, Running, Balancing)': 'لُوکوموشن سسٹمز (چلنا، دوڑنا، توازن)',
  'Manipulation & Grasping': 'مینیپولیشن اور گریسنگ',
  'Perception & Environmental Understanding': 'ادراک اور ماحولیاتی سمجھ',
  'Human-Robot Interaction (HRI)': 'انسان-روبوٹ تعامل (ایچ آر آئی)',
  'Machine Learning for Embodied Systems': 'ایمبوڈیڈ سسٹمز کے لیے مشین لرننگ',
  'Reinforcement Learning for Motion': 'موشن کے لیے ریانفورسمنٹ لرننگ',
  'Vision-Language-Action Models for Robotics': 'روبوٹکس کے لیے وژن-لینگویج-ایکشن ماڈلز',
  'Planning & Control Algorithms': 'پلاننگ اور کنٹرول الگورتھم',
  'ROS 2 and Robotics Software Engineering': 'آر او ایس 2 اور روبوٹکس سافٹ ویئر انجینئرنگ',
  'Simulation Environments (Gazebo, Isaac Sim, Mujoco)': 'سمولیشن ماحول (گزیبو، ایزک سیم، مجوکو)',
  'Hardware Prototyping for Humanoids': 'ہیومنوائڈز کے لیے ہارڈ ویئر پروٹو ٹائپنگ',
  'Energy, Power, Motors, Batteries': 'توانائی، طاقت، موتورز، بیٹریاں',
  'Safe Control and Failover Mechanisms': 'محفوظ کنٹرول اور فیل اوور میکانزم',
  'Multi-Modal AI Agents for Robotics': 'روبوٹکس کے لیے ملٹی-موڈل ای آئی ایجنٹس',
  'Real-Time Control Optimization': 'ریل ٹائم کنٹرول کی اصلاح',
  
  // Common terms
  'Overview': 'جائزہ',
  'History': 'تاریخ',
  'Applications': 'اپلی کیشنز',
  'Key developments': 'اہم ترقیات',
  'Principles': 'اصول',
  'Techniques': 'تکنیکیں',
  'Systems': 'سسٹمز',
  'Algorithms': 'الگورتھم',
  'Architecture': 'آرکیٹیکچر',
  'Design': 'ڈیزائن',
  'Control': 'کنٹرول',
  'Learning': 'سیکھنا',
  'Interaction': 'تعامل',
  'Safety': 'حفاطت',
  'Optimization': 'بہتری',
  'Planning': 'پلاننگ',
  'Simulation': 'سمولیشن',
  'Hardware': 'ہارڈ ویئر',
  'Software': 'سافٹ ویئر',
  'Engineering': 'انجینئرنگ',
  'Components': 'جزو',
  'Prototyping': 'پروٹو ٹائپنگ',
  'Energy': 'توانائی',
  'Power': 'طاقت',
  'Motors': 'موٹر',
  'Batteries': 'بیٹریاں',
  'Agents': 'ایجنٹس',
  'Real-Time': 'ریل ٹائم',
  'Performance': 'کارکردگی',
  'Efficiency': 'کارآمدی',
  'Stability': 'مستحکم',
  'Reliability': 'قابل اعتمادی',
  'Adaptability': 'موافق',
  'Flexibility': 'لچک',
  'Precision': 'درستگی',
  'Accuracy': 'درستگی',
  'Response': 'جواب',
  'Feedback': 'ریمارکس',
  'Integration': 'انضمام',
  'Coordination': 'ہم آہنگی',
  'Monitoring': 'نگرانی',
  'Diagnostics': 'تشخیص',
  'Maintenance': 'نگہداشت',
  'Testing': 'ٹیسٹنگ',
  'Quality': 'معیار',
  'Standards': 'معیارات',
  'Compliance': 'مطابقت',
  'Protocols': 'پروٹوکول',
  'Specifications': 'مخصوصات',
  'Requirements': 'ضروریات',
  'Objectives': 'اہداف',
  'Goals': 'اہداف',
  'Strategy': 'حکمت عملی',
  'Approach': 'طریقہ کار',
  'Framework': 'ڈھانچہ',
  'Structure': 'ڈھانچہ',
  'Management': 'انتظام',
  'Leadership': 'قیادت',
  'Collaboration': 'تعاون',
  'Communication': 'مواصلت',
  'Teamwork': 'ٹیم ورک',
  'Innovation': 'نوآوری',
  'Creativity': 'تخلیقیت',
  'Problem-solving': 'مسئلہ حل',
  'Analysis': 'تجزیہ',
  'Evaluation': 'جائزہ',
  'Assessment': 'جائزہ',
  'Review': 'جائزہ',
  'Improvement': 'بہتری',
  'Development': 'ترقی',
  'Progress': 'پیشرفت',
  'Growth': 'نمو',
  'Evolution': 'ترقی',
  'Change': 'تبدیلی',
  'Adaptation': 'موافق',
  'Personalization': 'ذاتی',
  'Expertise': 'مہارت',
  'Professional': 'پیشہ ور',
  'Specialist': 'ماہر',
  'Leader': 'قائد',
  'Manager': 'انتظام',
  'Supervisor': 'نگران',
  'Designer': 'ڈیزائنر',
  'Engineer': 'انجینئر',
  'Developer': 'ڈیولپر',
  'Analyst': 'تجزیہ کار',
  'Researcher': 'محقق',
  'Scientist': 'سائنسدان',
  'Success': 'کامیابی',
  'Achievement': 'کامیابی',
  'Discovery': 'دریافت',
  'Invention': 'اختراع',
  'Creation': 'تخلیق',
  'Common': 'عام',
  'Regular': 'ریگولر',
  'Usual': 'عموماً',
  'Standard': 'معیار',
  'Normal': 'معمول',
  'Logical': 'منطقی',
  'Practical': 'عملی',
  'Useful': 'مددگار',
  'Effective': ' مؤثر',
  'Efficient': 'کارآمد',
  'Successful': 'کامیاب'
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English

  const translate = (text) => {
    if (language === 'ur') {
      return urduTranslations[text] || text; // Return Urdu translation or original text if not found
    }
    return text;
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'ur' : 'en');
  };

  const value = {
    language,
    translate,
    toggleLanguage
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};