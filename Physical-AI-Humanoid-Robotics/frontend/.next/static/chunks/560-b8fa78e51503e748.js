"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[560],{1560:function(e,t,o){var n=o(5893),s=o(7294);t.Z=({isVisible:e=!0})=>{let[t,o]=(0,s.useState)(!1),[i,a]=(0,s.useState)([{id:1,text:"مرحبا! (Hello!) I'm your AI tutor for the Physical AI & Humanoid Robotics textbook. How can I help you understand the concepts better today?",sender:"tutor",timestamp:new Date}]),[r,l]=(0,s.useState)(""),[c,d]=(0,s.useState)(!1),u=(0,s.useRef)(null),h=()=>{o(!t)};(0,s.useEffect)(()=>{p()},[i]);let p=()=>{u.current?.scrollIntoView({behavior:"smooth"})},m=async e=>{d(!0);try{if(["what","tell me","explain","how","why","when","where","who","which"].some(t=>e.toLowerCase().includes(t)&&e.split(" ").length<5))return d(!1),"Could you please clarify your question? For example:\n- How do humanoid robots balance on two legs?\n- Explain the types of actuators used in robotics?\n- What is motion planning in robotics?\n\nThis will help me provide you with a more precise and helpful answer based on the textbook content.";let t=await fetch("/api/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})});if(!t.ok)throw Error("Failed to search textbook content");let o=await t.json();if(!o.results||!(o.results.length>0))return d(!1),`I couldn't find specific information about "${e}" in the textbook. Could you try rephrasing your question or specify which chapter you're referring to? The textbook covers topics like sensors, actuators, motion planning, control systems, and AI safety. I'm here to help explain any of these concepts in detail with step-by-step explanations and examples.`;{let e="";return o.results.forEach((t,o)=>{e+=`**${t.title}**

${t.content}

Reference (حوالہ): ${t.sectionId} - ${t.title}

`,t.sectionId.includes("4.1")?e+=`Thought Experiment (سوچ کا تجربہ): Consider how a robot arm picks up a delicate object (غور کریں کہ روبوٹ بازو ایک نازک چیز کو کیسے اٹھاتا ہے). What type of actuators would allow fine control of grip strength (پکڑ کی طاقت کو باریکی سے کنٹرول کرنے والی ایکچوایٹرز کی قسم کون سی ہوگی)?

`:t.sectionId.includes("3.1")?e+=`Exercise (ورک شیٹ): Design a simple sensing system for a robot navigating a room (room میں سفر کرنے والے روبوٹ کے لیے ایک سادہ سینسنگ سسٹم تشکیل دیں). What combination of sensors would you use and why (آپ کون سے سینسرز کے مجموعہ کا استعمال کریں گے اور کیوں)?

`:t.sectionId.includes("9.1")&&(e+=`Exercise (ورک شیٹ): Think about planning a path for a robot arm to move from point A to point B without hitting any obstacles in a cluttered workspace (نقطہ A سے نقطہ B تک جانے والے روبوٹ بازو کے راستے کی منصوبہ بندی کے بارے میں سوچیں بغیر کسی رکاوٹ کو ٹکرانے کے).

`)}),d(!1),e}}catch(n){console.error("Error getting AI response:",n);let t=e.toLowerCase(),o="I can help explain concepts from the Physical AI & Humanoid Robotics textbook. Could you specify which chapter or topic you'd like to explore?\n\nPlease ask about specific topics like balance, actuators, sensors, motion planning, or any particular chapter.";return t.includes("balance")||t.includes("two legs")||t.includes("walking")||t.includes("stability")?o=`**Humanoid Robot Balance Mechanisms** (ہیومینوئڈ روبوٹ کا توازن)

Step-by-step understanding (.Step-by-step سمجھ):
1. **Sensors** (سینسرز) like gyroscopes (گیروسکوپ) and accelerometers (ایکسیلرومیٹر) detect tilt and orientation (ُکاؤ اور سمت).
2. **Control algorithms** (کنٹرول الگورتھم) calculate corrective movements (اصلاحی حرکات).
3. **Actuators** (ایکچوایٹرز) adjust joints to keep the robot upright (روبوٹ کو سیدھا رکھنے کے لیے مشینیں).

Example (مثال): A bipedal robot adjusts its ankle motors in real-time while walking on uneven terrain (دو پیروں والا روبوٹ غیر مساوی زمین پر چلتے وقت اپنی اینکل موتورز کو حقیقی وقت میں ایڈجسٹ کرتا ہے).

Exercise (ورک شیٹ): Imagine a robot on a slope (تصور کریں کہ ایک روبوٹ ڈھلوان پر ہے). Which sensors and motors would you use to keep it upright (کون سے سینسرز اور موتورز اسے سیدھا رکھنے کے لیے استعمال کریں گے)?

Reference (حوالہ): Chapter 4 – Actuators in Robotics and Chapter 5 – Control Systems for Robotics`:t.includes("actuator")||t.includes("actuators")?o=`**Actuators in Robotics** (روبوٹکس میں ایکچوایٹرز)

Actuators (ایکچوایٹرز) are components that enable robots to move and interact with their environment (جزوامات جو روبوٹس کو حرکت کرنے اور ماحول کے ساتھ تعامل کرنے کے قابل بناتی ہیں). They are essentially the "muscles" of a robot (وہ دراصل روبوٹ کی "پٹھوں" ہیں), converting energy (usually electrical) into mechanical motion (عمدہ برقی توانائی کو میکینیکل حرکت میں تبدیل کرتے ہیں).

Step-by-step understanding (Step-by-step سمجھ):
1. **Electric motors** (برقی موتورز) are most common in humanoid robots due to their precision and controllability (ہیومینوئڈ روبوٹس میں ان کی درستگی اور قابل کنٹرول ہونے کی وجہ سے سب سے زیادہ عام ہیں).
2. **Servo motors** (سرو موتورز) provide precise angular control for joint movements (مشترکہ حرکات کے لیے درست زاویہ وار کنٹرول فراہم کرتے ہیں).
3. **Linear actuators** (لکیری ایکچوایٹرز) create straight-line motion for specific applications (مخصوص اطلاقات کے لیے سیدھی لکیر کی حرکت پیدا کرتے ہیں).

Thought Experiment (سوچ کا تجربہ): Consider how a robot arm picks up a delicate object (غور کریں کہ روبوٹ بازو ایک نازک چیز کو کیسے اٹھاتا ہے). What type of actuators would allow fine control of grip strength (پکڑ کی طاقت کو باریکی سے کنٹرول کرنے والی ایکچوایٹرز کی قسم کون سی ہوگی)?

Reference (حوالہ): Chapter 4 – Actuators in Robotics`:t.includes("sensor")||t.includes("sensors")?o=`**Sensors in Robotics** (روبوٹکس میں سینسرز)

Sensors (سینسرز) in robotics function similarly to human senses (روبوٹکس میں سینسرز انسانی حواس کی طرح کام کرتے ہیں), providing the robot with information about its environment and internal state (ماحول اور اندرونی حالت کے بارے میں روبوٹ کو معلومات فراہم کرتے ہیں). Common sensors include cameras (کیمرے), microphones (مائیکروفونز), accelerometers (ایکسیلرومیٹرز), gyroscopes (گیروسکوپس), force sensors (قوت کے سینسرز), and tactile sensors (لمسی سینسرز).

Step-by-step understanding (Step-by-step سمجھ):
1. **Proprioceptive sensors** (ادراکی سینسرز) measure internal states like joint angles and motor position (مشترکہ زاویوں اور موٹر کی پوزیشن جیسے اندرونی حالتیں ماپتے ہیں).
2. **Exteroceptive sensors** (بیرونی سینسرز) perceive external environment (بیرونی ماحول کا ادراک کرتے ہیں), such as cameras for vision (دیکھنے کے لیے کیمرے) and microphones for sound (آواز کے لیے مائیکروفونز).
3. **Force/torque sensors** (قوت/ٹورک سینسرز) measure interaction forces with objects and environment (اشیاء اور ماحول کے ساتھ تعامل کی قوتوں کو ماپتے ہیں).

Example (مثال): A humanoid robot uses its camera (vision sensor) to recognize objects and its tactile sensors in fingertips to grasp objects with appropriate force (ہیومینوئڈ روبوٹ اشیاء کو پہچاننے کے لیے اس کے کیمرے (وژن سینسر) کا اور مناسب قوت کے ساتھ اشیاء کو تھامنے کے لیے اس کے انگلیوں کے پیروں میں لمسی سینسرز کا استعمال کرتا ہے).

Exercise (ورک شیٹ): Design a simple sensing system for a robot navigating a room (-room میں سفر کرنے والے روبوٹ کے لیے ایک سادہ سینسنگ سسٹم تشکیل دیں). What combination of sensors would you use and why (آپ کون سے سینسرز کے مجموعہ کا استعمال کریں گے اور کیوں)?

Reference (حوالہ): Chapter 3 – Sensors in Robotics`:t.includes("motion")||t.includes("planning")||t.includes("movement")?o=`**Motion Planning in Robotics** (روبوٹکس میں موشن پلاننگ)

Motion planning (موشن پلاننگ) in robotics involves determining a sequence of movements to achieve a goal while avoiding obstacles (روبوٹکس میں موشن پلاننگ مقصد کے حصول کے لیے حرکات کی ترتیب کا تعین کرتا ہے جبکہ رکاوٹوں سے بچتے ہیں).

Step-by-step understanding (Step-by-step سمجھ):
1. **Path planning** (راہ کی منصوبہ بندی) - Calculate a geometric route from start to goal (شروع سے مقصد تک جیومیٹرک راستہ کا حساب لگائیں).
2. **Trajectory planning** (محل حرکت کی منصوبہ بندی) - Add timing and kinematic constraints to the path (راہ میں وقت اور کنیمیٹک رکاوٹیں شامل کریں).
3. **Control execution** (کنٹرول انجام دہی) - Send commands to actuators to follow the planned trajectory (منصوبہ بند محل حرکت کو فالو کرنے کے لیے ایکچوایٹرز کو حکم دیں).

Example (مثال): A humanoid robot planning to step over an obstacle calculates the required leg movement trajectory to avoid collision while maintaining balance (ایک ہیومینوئڈ روبوٹ کو رکاوٹ کے اوپر قدم رکھنے کے منصوبے کے تحت توازن برقرار رکھتے ہوئے ٹکراؤ سے بچنے کے لیے ضروری لیگ موشن ٹریجکٹری کا حساب لگاتا ہے).

Exercise (ورک شیٹ): Think about planning a path for a robot arm to move from point A to point B without hitting any obstacles in a cluttered workspace (نقطہ A سے نقطہ B تک جانے والے روبوٹ بازو کے راستے کی منصوبہ بندی کے بارے میں سوچیں بغیر کسی رکاوٹ کو ٹکرانے کے).

Reference (حوالہ): Chapter 9 – Motion Planning`:t.includes("hello")||t.includes("hi")||t.includes("start")?o="Hello! (ہیلو!) I'm your AI tutor for the Physical AI & Humanoid Robotics textbook. How can I help you understand the concepts better today?\n\nTry asking specific questions like:\n- How do humanoid robots balance?\n- Explain the types of actuators used in robotics?\n- What are the different types of sensors?":t.includes("chapter")||t.includes("content")||t.includes("topics")?o=`The textbook "Physical AI & Humanoid Robotics" covers several important topics:

1. **Chapter 1**: Overview and History of Physical AI (فزیکل ای آئی کا جائزہ اور تاریخ)
2. **Chapter 2**: Foundations of Physical AI (فزیکل ای آئی کی بنیادیں)
3. **Chapter 3**: Sensors in Robotics (روبوٹکس میں سینسرز)
4. **Chapter 4**: Actuators in Robotics (روبوٹکس میں ایکچوایٹرز)
5. **Chapter 5**: Control Systems for Robotics (روبوٹکس کے لیے کنٹرول سسٹمز)
6. **Chapter 6**: Machine Learning for Robotics (روبوٹکس کے لیے مشین لرننگ)
7. **Chapter 9**: Motion Planning (موشن پلاننگ)
8. **Chapter 18**: AI Safety and Ethics (ای آئ سیفٹی اور اخلاق)

Which topic would you like to explore in detail? (کون سے موضوع کو تفصیل سے جانا چاہیں گے)`:t.includes("introduction")||t.includes("intro")?o=`**Introduction to Physical AI** (فزیکل ای آئی کا تعارف)

Physical AI (فزیکل ای آئی) is an interdisciplinary field that combines artificial intelligence with physical systems (جراثیمی علاقہ جو مصنوعی ذہانت کو جسمانی نظام کے ساتھ جوڑتا ہے). It focuses on creating intelligent machines that can understand, interact with, and adapt to the physical world (وہ انٹلیجنٹ مشینوں کو تخلیق کرنے پر توجہ مرکز کرتا ہے جو جسمانی دنیا کو سمجھ سکیں، اس کے ساتھ تعامل کر سکیں اور اس کے مطابق ایڈجسٹ ہو سکیں).

Step-by-step understanding (Step-by-step سمجھ):
1. **Perception** (ادراک) - Gathering information about the environment (ماحول کے بارے میں معلومات اکٹھا کرنا).
2. **Cognition** (سوچنا) - Processing information to understand and reason (سمجھنے اور سوچنے کے لیے معلومات کی پروسیسنگ).
3. **Action** (عمل) - Executing movements or tasks in the physical world (جسمانی دنیا میں حرکات یا کام انجام دینا).

Reference (حوالہ): Chapter 1 – Overview and History of Physical AI`:(t.includes("translate")||t.includes("urdu"))&&(o=`I can provide translations to Urdu in parentheses ( ). For example:

English: Sensors in robotics function similarly to human senses
Urdu: روبوٹکس میں سینسرز انسانی حواس کی طرح کام کرتے ہیں

If you'd like any concept explained in Urdu, just ask!`),d(!1),o}},b=async()=>{if(""===r.trim())return;let e={id:i.length+1,text:r,sender:"user",timestamp:new Date};a(t=>[...t,e]),l("");let t=await m(r),o={id:i.length+2,text:t,sender:"tutor",timestamp:new Date};a(e=>[...e,o])};return e?(0,n.jsxs)("div",{className:"fixed bottom-6 right-6 z-50",children:[!t&&(0,n.jsx)("button",{onClick:h,className:"flex items-center justify-center w-16 h-16 bg-[#332a52] text-white rounded-full shadow-lg hover:bg-[#4f46e5] transition-all duration-300 transform hover:scale-105","aria-label":"Open AI Tutor",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"})})}),t&&(0,n.jsxs)("div",{className:"w-80 h-[500px] flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 z-10",children:[(0,n.jsxs)("div",{className:"bg-[#332a52] text-white p-4 flex justify-between items-center",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"font-bold",children:"AI Tutor"}),(0,n.jsx)("p",{className:"text-xs opacity-80",children:"Physical AI & Robotics"})]}),(0,n.jsx)("button",{onClick:h,className:"text-white hover:text-gray-200 focus:outline-none","aria-label":"Close chat",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),(0,n.jsxs)("div",{className:"flex-1 overflow-y-auto p-4 bg-gray-50 max-h-[350px]",children:[i.map(e=>(0,n.jsx)("div",{className:`mb-3 flex ${"tutor"===e.sender?"justify-start":"justify-end"}`,children:(0,n.jsxs)("div",{className:`max-w-[80%] rounded-2xl p-3 ${"tutor"===e.sender?"bg-[var(--tutor-bubble)] text-gray-800 rounded-tl-none":"bg-[var(--user-bubble)] text-gray-800 rounded-tr-none"}`,children:[(0,n.jsx)("div",{className:"text-xs font-semibold mb-1",children:"tutor"===e.sender?"AI Tutor":"You"}),(0,n.jsx)("div",{className:"text-sm whitespace-pre-wrap",children:e.text}),(0,n.jsx)("div",{className:"text-xs opacity-70 mt-1 text-right",children:e.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})},e.id)),c&&(0,n.jsx)("div",{className:"mb-3 flex justify-start",children:(0,n.jsxs)("div",{className:"max-w-[80%] rounded-2xl p-3 bg-[var(--tutor-bubble)] text-gray-800 rounded-tl-none",children:[(0,n.jsx)("div",{className:"text-xs font-semibold mb-1",children:"AI Tutor"}),(0,n.jsxs)("div",{className:"flex space-x-1",children:[(0,n.jsx)("div",{className:"w-2 h-2 rounded-full bg-gray-500 animate-bounce"}),(0,n.jsx)("div",{className:"w-2 h-2 rounded-full bg-gray-500 animate-bounce",style:{animationDelay:"0.2s"}}),(0,n.jsx)("div",{className:"w-2 h-2 rounded-full bg-gray-500 animate-bounce",style:{animationDelay:"0.4s"}})]})]})}),(0,n.jsx)("div",{ref:u})]}),(0,n.jsx)("div",{className:"border-t border-gray-200 p-3 bg-white",children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("input",{value:r,onChange:e=>l(e.target.value),onKeyPress:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),b())},placeholder:"Ask about robotics...",className:"flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#332a52] focus:border-[#332a52]"}),(0,n.jsx)("button",{onClick:b,disabled:c||""===r.trim(),className:`bg-[#332a52] text-white px-4 rounded-r-lg font-medium text-sm ${c||""===r.trim()?"opacity-50 cursor-not-allowed":"hover:bg-[#4f46e5] transition-colors"}`,children:"Send"})]})})]})]}):null}}}]);