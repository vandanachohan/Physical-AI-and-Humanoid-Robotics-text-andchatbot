import Head from 'next/head';
import MainLayout from '../components/MainLayout';
import AIChatbot from '../components/AIChatbot';
import TextbookSidebar from '../components/TextbookSidebar';
import { useRef } from 'react';

export default function AITutorPage() {
  const aiChatbotRef = useRef(null);

  const handleAskQuestion = (question) => {
    // This function will be called when a question is selected from the sidebar
    // We need to pass this to the AIChatbot component
    if (aiChatbotRef.current && typeof aiChatbotRef.current.handleQuestionFromSidebar === 'function') {
      aiChatbotRef.current.handleQuestionFromSidebar(question);
    } else {
      // Fallback: simulate sending the question to the chatbot
      console.log("Question from sidebar:", question);
    }
  };

  return (
    <>
      <Head>
        <title>AI Tutor for Physical AI & Humanoid Robotics</title>
        <meta name="description" content="Interactive AI tutor for Physical AI & Humanoid Robotics textbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout showAIChatbot={false} theme="default">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Physical AI & Humanoid Robotics
            </h1>
            <p
              className="text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              Interactive AI Tutor - Learn with real-time assistance
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Textbook Sidebar - 40% width on large screens */}
            <div className="lg:w-2/5">
              <TextbookSidebar onAskQuestion={handleAskQuestion} />
            </div>

            {/* Chat Interface - 60% width on large screens */}
            <div className="lg:w-3/5">
              <div
                className="bg-white rounded-xl shadow-lg p-1 border"
                style={{ borderColor: 'var(--primary-color)' }}
              >
                <AIChatbot ref={aiChatbotRef} />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            <p>
              This interactive AI tutor helps you understand the concepts of Physical AI & Humanoid Robotics.
              Ask questions about any chapter or topic, and get step-by-step explanations with examples.
            </p>
          </div>
        </div>
      </MainLayout>
    </>
  );
}