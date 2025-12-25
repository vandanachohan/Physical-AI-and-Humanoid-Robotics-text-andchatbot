import React, { useState } from 'react';

const TextbookSidebar = ({ onAskQuestion }) => {
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedQuickResources, setExpandedQuickResources] = useState(false);

  const chapters = [
    {
      id: 1,
      title: 'Chapter 1: Overview and History',
      sections: [
        { id: '1.1', title: 'Overview' },
        { id: '1.2', title: 'History' }
      ]
    },
    {
      id: 2,
      title: 'Chapter 2: Foundations of Physical AI',
      sections: [
        { id: '2.1', title: 'Introduction' }
      ]
    },
    {
      id: 3,
      title: 'Chapter 3: Sensors in Robotics',
      sections: [
        { id: '3.1', title: 'Sensor Types' }
      ]
    },
    {
      id: 4,
      title: 'Chapter 4: Actuators in Robotics',
      sections: [
        { id: '4.1', title: 'Actuator Types' }
      ]
    },
    {
      id: 5,
      title: 'Chapter 5: Control Systems for Robotics',
      sections: [
        { id: '5.1', title: 'Control Theory' }
      ]
    },
    {
      id: 6,
      title: 'Chapter 6: Machine Learning for Robotics',
      sections: [
        { id: '6.1', title: 'ML for Robotics' }
      ]
    },
    {
      id: 7,
      title: 'Chapter 7: Computer Vision in Robotics',
      sections: [
        { id: '7.1', title: 'Vision Systems' }
      ]
    },
    {
      id: 8,
      title: 'Chapter 8: Natural Language Processing in Robotics',
      sections: [
        { id: '8.1', title: 'NLP in Robotics' }
      ]
    },
    {
      id: 9,
      title: 'Chapter 9: Motion Planning',
      sections: [
        { id: '9.1', title: 'Motion Planning Algorithms' }
      ]
    },
    {
      id: 10,
      title: 'Chapter 10: Path Planning',
      sections: [
        { id: '10.1', title: 'Path Planning Algorithms' }
      ]
    },
    {
      id: 11,
      title: 'Chapter 11: Human-Robot Interaction',
      sections: [
        { id: '11.1', title: 'HRI Principles' }
      ]
    },
    {
      id: 12,
      title: 'Chapter 12: Robotics Software Frameworks',
      sections: [
        { id: '12.1', title: 'Robotics Frameworks' }
      ]
    },
    {
      id: 13,
      title: 'Chapter 13: Robotics Hardware Components',
      sections: [
        { id: '13.1', title: 'Robotics Hardware Components' }
      ]
    },
    {
      id: 14,
      title: 'Chapter 14: Manufacturing and Industrial Robotics',
      sections: [
        { id: '14.1', title: 'Industrial Robotics' }
      ]
    },
    {
      id: 15,
      title: 'Chapter 15: Healthcare and Medical Robotics',
      sections: [
        { id: '15.1', title: 'Medical Robotics' }
      ]
    },
    {
      id: 16,
      title: 'Chapter 16: Agricultural Robotics',
      sections: [
        { id: '16.1', title: 'Agricultural Robotics' }
      ]
    },
    {
      id: 17,
      title: 'Chapter 17: Autonomous Vehicles',
      sections: [
        { id: '17.1', title: 'Autonomous Vehicles' }
      ]
    },
    {
      id: 18,
      title: 'Chapter 18: AI Safety and Ethics',
      sections: [
        { id: '18.1', title: 'AI Safety Considerations' }
      ]
    },
    {
      id: 19,
      title: 'Chapter 19: Future of Robotics',
      sections: [
        { id: '19.1', title: 'Future Trends' }
      ]
    },
    {
      id: 20,
      title: 'Chapter 20: Conclusion',
      sections: [
        { id: '20.1', title: 'Conclusion' }
      ]
    }
  ];

  const toggleSection = (chapterId) => {
    setExpandedSections(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  const toggleQuickResources = () => {
    setExpandedQuickResources(!expandedQuickResources);
  };

  const handleAskQuestion = (question) => {
    if (onAskQuestion) {
      onAskQuestion(question);
    }
  };

  const generateSectionQuestions = (sectionTitle) => {
    const questions = [
      `Explain ${sectionTitle} in simple words`,
      `Give me a real-world example of ${sectionTitle}`,
      `Why is ${sectionTitle} important in Physical AI?`,
      `Summarize ${sectionTitle}`,
      `Ask me a quiz question about ${sectionTitle}`
    ];
    return questions;
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 h-full overflow-y-auto">
      <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Physical AI & Humanoid Robotics</h3>
      <h4 className="font-semibold text-md text-indigo-700 mb-3">Table of Contents</h4>
      <div className="space-y-2">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="border-l-2 border-indigo-200 pl-3">
            <div
              className="font-medium text-gray-800 hover:text-indigo-600 cursor-pointer"
              onClick={() => toggleSection(chapter.id)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleSection(chapter.id);
                }
              }}
              aria-expanded={expandedSections[chapter.id] || false}
              role="button"
            >
              {chapter.title}
            </div>
            {(expandedSections[chapter.id] || chapter.sections.length === 1) && (
              <div className="ml-2 mt-1 space-y-1">
                {chapter.sections.map((section) => (
                  <div key={section.id} className="relative group">
                    <div
                      className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer pl-2 hover:bg-indigo-50 p-1 rounded flex justify-between items-center"
                    >
                      {section.id} {section.title}
                      <button
                        className="ml-2 text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation();
                          const questions = generateSectionQuestions(section.title);
                          // For now, we'll ask the first question - in a real implementation, you might want to show a dropdown of questions
                          handleAskQuestion(questions[0]);
                        }}
                        aria-label={`Ask AI Tutor about ${section.title}`}
                      >
                        Ask AI
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t">
        <h4
          className="font-semibold text-md text-indigo-700 mb-2 hover:text-indigo-800 cursor-pointer"
          onClick={toggleQuickResources}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleQuickResources();
            }
          }}
          role="button"
          aria-expanded={expandedQuickResources}
        >
          Quick Resources
        </h4>
        {expandedQuickResources && (
          <div className="space-y-2">
            <button
              className="w-full text-left text-sm text-gray-600 hover:text-indigo-600 cursor-pointer hover:bg-indigo-50 p-2 rounded flex items-center"
              onClick={() => handleAskQuestion("Give me a quick summary of Physical AI concepts")}
            >
              <span className="mr-2">📋</span> Quick Summary
            </button>
            <button
              className="w-full text-left text-sm text-gray-600 hover:text-indigo-600 cursor-pointer hover:bg-indigo-50 p-2 rounded flex items-center"
              onClick={() => handleAskQuestion("What are the key concepts in Physical AI?")}
            >
              <span className="mr-2">🔑</span> Key Concepts
            </button>
            <button
              className="w-full text-left text-sm text-gray-600 hover:text-indigo-600 cursor-pointer hover:bg-indigo-50 p-2 rounded flex items-center"
              onClick={() => handleAskQuestion("What are common mistakes students make when learning about robotics?")}
            >
              <span className="mr-2">❌</span> Common Mistakes
            </button>
            <button
              className="w-full text-left text-sm text-gray-600 hover:text-indigo-600 cursor-pointer hover:bg-indigo-50 p-2 rounded flex items-center"
              onClick={() => handleAskQuestion("Give me practice questions about humanoid robotics")}
            >
              <span className="mr-2">❓</span> Practice Questions
            </button>
            <button
              className="w-full text-left text-sm text-gray-600 hover:text-indigo-600 cursor-pointer hover:bg-indigo-50 p-2 rounded flex items-center"
              onClick={() => handleAskQuestion("I have a question about Physical AI and Robotics")}
            >
              <span className="mr-2">💬</span> Ask a Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextbookSidebar;