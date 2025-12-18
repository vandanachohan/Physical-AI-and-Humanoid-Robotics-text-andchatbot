import React from 'react';
import Head from 'next/head';
import TextbookSidebar from './TextbookSidebar';
import FixedAIChatbot from './FixedAIChatbot';

const TextbookLayout = ({ children, currentChapter, prevChapter, nextChapter }) => {
  return (
    <>
      <Head>
        <title>{currentChapter?.title || 'Physical AI & Humanoid Robotics'} - Textbook</title>
        <meta name="description" content="Interactive textbook on Physical AI & Humanoid Robotics with AI-powered tutoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-[#332a52] text-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-xl md:text-2xl font-bold">Physical AI & Humanoid Robotics</h1>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
          {/* Sidebar - 30% width on large screens */}
          <div className="lg:w-3/12">
            <TextbookSidebar />
          </div>

          {/* Main content - 70% width on large screens */}
          <div className="lg:w-9/12">
            <div className="bg-white rounded-lg shadow-md p-6">
              {children}
              
              {/* Navigation buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                {prevChapter ? (
                  <a 
                    href={`/textbook/chapter/${prevChapter.id}`}
                    className="px-4 py-2 bg-[#332a52] text-white rounded-lg hover:bg-[#4f46e5] transition-colors"
                  >
                    ← Previous
                  </a>
                ) : (
                  <div></div> // Empty div for spacing
                )}
                
                {nextChapter ? (
                  <a 
                    href={`/textbook/chapter/${nextChapter.id}`}
                    className="px-4 py-2 bg-[#332a52] text-white rounded-lg hover:bg-[#4f46e5] transition-colors ml-auto"
                  >
                    Next →
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* AI Chatbot - stays fixed on the right */}
        <FixedAIChatbot />
      </div>
    </>
  );
};

export default TextbookLayout;