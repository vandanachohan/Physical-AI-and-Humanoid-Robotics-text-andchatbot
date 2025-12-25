"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[581],{7581:function(e,t,o){var s=o(5893),n=o(7294);let i=n.forwardRef((e,t)=>{let[o,i]=(0,n.useState)([{id:1,text:"مرحبا! (Hello!) I'm your AI tutor for the Physical AI & Humanoid Robotics textbook. How can I help you understand the concepts better today?",sender:"tutor",timestamp:new Date}]),[a,r]=(0,n.useState)(""),[c,l]=(0,n.useState)(!1),d=(0,n.useRef)(null);(0,n.useEffect)(()=>{u()},[o]),n.useImperativeHandle(t,()=>({handleQuestionFromSidebar:e=>{m(e)}}));let u=()=>{d.current?.scrollIntoView({behavior:"smooth"})},h=async e=>{l(!0);try{if(["what","tell me","explain","how","why","when","where","who","which"].some(t=>e.toLowerCase().includes(t)&&e.split(" ").length<5))return l(!1),"Could you please clarify your question? For example:\n- How do humanoid robots balance on two legs?\n- Explain the types of actuators used in robotics?\n- What is motion planning in robotics?\n\nThis will help me provide you with a more precise and helpful answer based on the textbook content.";let t=await fetch("/api/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})});if(!t.ok)throw Error("Failed to search textbook content");let o=await t.json();if(!o.results||!(o.results.length>0))return l(!1),`I couldn't find specific information about "${e}" in the textbook. Could you try rephrasing your question or specify which chapter you're referring to? The textbook covers topics like sensors, actuators, motion planning, control systems, and AI safety. I'm here to help explain any of these concepts in detail with step-by-step explanations and examples.`;{let e="";return o.results.forEach((t,o)=>{e+=`**${t.title}**

${t.content}

Reference (حوالہ): ${t.sectionId} - ${t.title}

`,t.sectionId.includes("4.1")?e+=`Thought Experiment (سوچ کا تجربہ): Consider how a robot arm picks up a delicate object (غور کریں کہ روبوٹ بازو ایک نازک چیز کو کیسے اٹھاتا ہے). What type of actuators would allow fine control of grip strength (پکڑ کی طاقت کو باریکی سے کنٹرول کرنے والی ایکچوایٹرز کی قسم کون سی ہوگی)?

`:t.sectionId.includes("3.1")?e+=`Exercise (ورک شیٹ): Design a simple sensing system for a robot navigating a room (room میں سفر کرنے والے روبوٹ کے لیے ایک سادہ سینسنگ سسٹم تشکیل دیں). What combination of sensors would you use and why (آپ کون سے سینسرز کے مجموعہ کا استعمال کریں گے اور کیوں)?

`:t.sectionId.includes("9.1")&&(e+=`Exercise (ورک شیٹ): Think about planning a path for a robot arm to move from point A to point B without hitting any obstacles in a cluttered workspace (نقطہ A سے نقطہ B تک جانے والے روبوٹ بازو کے راستے کی منصوبہ بندی کے بارے میں سوچیں بغیر کسی رکاوٹ کو ٹکرانے کے).

`)}),l(!1),e}}catch(s){console.error("Error getting AI response:",s);let t=e.toLowerCase(),o="I can help explain concepts from the Physical AI & Humanoid Robotics textbook. Could you specify which chapter or topic you'd like to explore?\n\nPlease ask about specific topics like balance, actuators, sensors, motion planning, or any particular chapter.";return t.includes("balance")||t.includes("two legs")||t.includes("walking")||t.includes("stability")?o=`**Humanoid Robot Balance Mechanisms** (ہیومینوئڈ روبوٹ کا توازن)

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

If you'd like any concept explained in Urdu, just ask!`),l(!1),o}},m=async e=>{let t={id:o.length+1,text:e,sender:"user",timestamp:new Date};i(e=>[...e,t]);let s=await h(e),n={id:o.length+2,text:s,sender:"tutor",timestamp:new Date};i(e=>[...e,n])},p=async()=>{if(""===a.trim())return;let e={id:o.length+1,text:a,sender:"user",timestamp:new Date};i(t=>[...t,e]),r("");let t=await h(a),s={id:o.length+2,text:t,sender:"tutor",timestamp:new Date};i(e=>[...e,s])};return(0,s.jsxs)("div",{className:"chat-container",children:[(0,s.jsxs)("div",{className:"chat-header",children:[(0,s.jsx)("h2",{className:"text-xl font-bold",children:"Physical AI & Humanoid Robotics Tutor"}),(0,s.jsx)("p",{className:"text-indigo-200 text-sm",children:"AI-powered assistance for your textbook"})]}),(0,s.jsxs)("div",{className:"chat-messages",children:[o.map(e=>(0,s.jsx)("div",{className:`message ${"tutor"===e.sender?"message-tutor":"message-user"}`,children:(0,s.jsxs)("div",{className:`message-bubble ${"tutor"===e.sender?"message-bubble-tutor":"message-bubble-user"}`,children:[(0,s.jsx)("div",{className:"message-sender",children:"tutor"===e.sender?"AI Tutor (رُوبوٹ ٹیوٹر)":"You (آپ)"}),(0,s.jsx)("div",{className:"message-text",children:e.text}),(0,s.jsx)("div",{className:"message-time",children:e.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})},e.id)),c&&(0,s.jsx)("div",{className:"message message-tutor",children:(0,s.jsxs)("div",{className:"message-bubble message-bubble-tutor",children:[(0,s.jsx)("div",{className:"message-sender",children:"AI Tutor (رُوبوٹ ٹیوٹر)"}),(0,s.jsxs)("div",{className:"loading-indicator",children:[(0,s.jsx)("div",{className:"loading-dot"}),(0,s.jsx)("div",{className:"loading-dot"}),(0,s.jsx)("div",{className:"loading-dot"})]})]})}),(0,s.jsx)("div",{ref:d})]}),(0,s.jsxs)("div",{className:"input-area",children:[(0,s.jsxs)("div",{className:"input-form",children:[(0,s.jsx)("textarea",{value:a,onChange:e=>r(e.target.value),onKeyPress:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),p())},placeholder:"Ask a question about Physical AI & Humanoid Robotics...",className:"input-textarea"}),(0,s.jsx)("button",{onClick:p,disabled:c||""===a.trim(),className:"send-button",children:"Send"})]}),(0,s.jsx)("div",{className:"example-queries",children:'Example: "How do humanoid robots balance on two legs?" or "Explain actuators and their types"'})]})]})});i.displayName="AIChatbot",t.Z=i}}]);