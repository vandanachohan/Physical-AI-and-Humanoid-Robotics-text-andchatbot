import React, { useState, useContext } from 'react';
import PersonalizationControls from '../src/components/PersonalizationControls';
import { UserContext } from '../src/contexts/UserContext';

const ChapterContent = ({ chapter }) => {
  const { user } = useContext(UserContext);
  const [showPersonalization, setShowPersonalization] = useState(false);

  // Function to get personalized content based on user's background
  const getPersonalizedContent = (content) => {
    if (!user || !user.softwareBackground || !user.hardwareBackground) {
      return content;
    }

    // If user has software background, enhance code examples
    if (user.softwareBackground.toLowerCase().includes('beginner')) {
      return content + '\n\n💡 Tip for beginners: This concept might be challenging initially, but with practice, it becomes intuitive.';
    } else if (user.softwareBackground.toLowerCase().includes('advanced') || user.softwareBackground.toLowerCase().includes('expert')) {
      return content + '\n\n🔧 Advanced tip: Consider implementing this with additional optimizations for production environments.';
    }

    // If user has hardware background, enhance hardware concepts
    if (user.hardwareBackground.toLowerCase().includes('beginner')) {
      return content + '\n\n💡 Hardware beginners: Focus on understanding the basic components before diving deeper.';
    } else if (user.hardwareBackground.toLowerCase().includes('advanced') || user.hardwareBackground.toLowerCase().includes('expert')) {
      return content + '\n\n🔧 Hardware experts: This implementation can be optimized at the firmware level for better performance.';
    }

    return content;
  };

  return (
    <div className="animate-fadeIn">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-3 border-gray-200">
        {chapter.title}
      </h1>

      {/* Personalization button at the start of each chapter */}
      <div className="mb-6">
        <button
          onClick={() => setShowPersonalization(!showPersonalization)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#332a52] hover:bg-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#332a52]"
        >
          {showPersonalization ? 'Hide Personalization' : 'Personalize for Me'}
        </button>

        {user && (
          <span className="ml-3 text-sm text-gray-600">
            Welcome, {user.name || user.email.split('@')[0]}!
          </span>
        )}
      </div>

      {/* Show personalization controls if user clicked the button */}
      {showPersonalization && <PersonalizationControls />}

      <div className="prose prose-lg max-w-none">
        {chapter.sections.map((section, index) => (
          <div key={section.id} className="mb-8 last:mb-0">
            <h2 className="text-xl font-semibold text-[#332a52] mb-3 flex items-center">
              <span className="mr-2">{section.id}</span>
              {section.title}
            </h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {getPersonalizedContent(section.content)}
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .prose {
          font-size: 1rem;
          line-height: 1.75;
        }
        .prose-lg {
          font-size: 1.125rem;
          line-height: 1.7777778;
        }
        .prose :where(p):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
          margin-top: 0.75em;
          margin-bottom: 0.75em;
        }
      `}</style>
    </div>
  );
};

export default ChapterContent;