import React from 'react';

const BabyPinkChapterView = ({ chapter }) => {
  if (!chapter) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg" style={{ backgroundColor: '#fff8f7' }}>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#880e4f' }}>Chapter Not Found</h2>
          <p className="text-gray-600" style={{ color: '#ad1457' }}>Please select a chapter from the sidebar to view its content.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg" style={{ backgroundColor: '#fff8f7' }}>
      <div className="mb-8 pb-6 border-b" style={{ borderColor: '#f8c6d0' }}>
        <h1 
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: '#880e4f' }}
        >
          {chapter.title}
        </h1>
        <div className="w-32 h-1" style={{ backgroundColor: '#ec407a' }}></div>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* Render chapter content with proper styling */}
        <div 
          className="chapter-content"
          style={{ color: '#4a5568' }}
        >
          {chapter.content ? (
            // If content is provided as a string, render it directly
            <div dangerouslySetInnerHTML={{ __html: chapter.content }} />
          ) : (
            // If content is structured, render each section
            chapter.sections?.map((section, index) => (
              <div key={section.id || index} className="mb-8">
                <h2 
                  className="text-2xl font-bold mb-4 mt-8 first:mt-0"
                  style={{ color: '#880e4f' }}
                >
                  {section.title}
                </h2>
                <div 
                  className="section-content text-gray-700 leading-relaxed"
                  style={{ color: '#4a5568' }}
                >
                  {section.content && (
                    <div dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br />') }} />
                  )}
                  {section.learningObjectives && (
                    <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#fde0e6' }}>
                      <h3 className="font-bold mb-2" style={{ color: '#ec407a' }}>Learning Objectives</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        {section.learningObjectives.map((obj, i) => (
                          <li key={i} style={{ color: '#880e4f' }}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {section.exercises && section.exercises.length > 0 && (
                    <div className="mt-6 p-4 rounded-lg border" style={{ borderColor: '#f8c6d0', backgroundColor: '#fff5f7' }}>
                      <h3 className="font-bold mb-2" style={{ color: '#ec407a' }}>Exercises</h3>
                      <ol className="list-decimal pl-6 space-y-2">
                        {section.exercises.map((exercise, i) => (
                          <li key={i} className="text-gray-700" style={{ color: '#4a5568' }}>{exercise}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t" style={{ borderColor: '#f8c6d0' }}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span 
              className="inline-block px-3 py-1 rounded-full text-sm font-medium"
              style={{ 
                backgroundColor: '#fce4ec', 
                color: '#ec407a',
                borderColor: '#f8c6d0',
                borderWidth: '1px'
              }}
            >
              Chapter {chapter.id}
            </span>
          </div>
          <div className="flex gap-3">
            {chapter.prevChapter && (
              <button
                className="px-4 py-2 rounded-lg font-medium hover:shadow-md transition-shadow"
                style={{
                  backgroundColor: '#fcd3e1',
                  color: '#880e4f',
                  borderColor: '#ec407a',
                  borderWidth: '1px'
                }}
              >
                ← Previous
              </button>
            )}
            {chapter.nextChapter && (
              <button
                className="px-4 py-2 rounded-lg font-medium hover:shadow-md transition-shadow"
                style={{
                  backgroundColor: '#ec407a',
                  color: '#ffffff',
                  borderColor: '#d81b60',
                  borderWidth: '1px'
                }}
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyPinkChapterView;