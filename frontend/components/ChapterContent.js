import React from 'react';

const ChapterContent = ({ chapter }) => {
  return (
    <div className="animate-fadeIn">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-3 border-gray-200">
        {chapter.title}
      </h1>
      
      <div className="prose prose-lg max-w-none">
        {chapter.sections.map((section, index) => (
          <div key={section.id} className="mb-8 last:mb-0">
            <h2 className="text-xl font-semibold text-[#332a52] mb-3 flex items-center">
              <span className="mr-2">{section.id}</span>
              {section.title}
            </h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {section.content}
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