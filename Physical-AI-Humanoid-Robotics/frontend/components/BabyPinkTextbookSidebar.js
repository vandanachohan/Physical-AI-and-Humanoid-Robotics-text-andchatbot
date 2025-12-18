import React, { useState } from 'react';

const BabyPinkTextbookSidebar = () => {
  const [activeChapter, setActiveChapter] = useState(1);
  
  const chapters = [
    { id: 1, title: 'Introduction to Robotics', pages: 12 },
    { id: 2, title: 'Sensor Systems', pages: 18 },
    { id: 3, title: 'Actuator Control', pages: 15 },
    { id: 4, title: 'Motion Planning', pages: 22 },
    { id: 5, title: 'AI Decision Making', pages: 20 },
    { id: 6, title: 'Human-Robot Interaction', pages: 16 }
  ];

  return (
    <div 
      className="rounded-xl shadow-lg p-6 h-full overflow-y-auto"
      style={{ 
        backgroundColor: '#ffffff',
        border: '1px solid #f8c6d0',
        boxShadow: '0 4px 6px rgba(248, 198, 208, 0.1)'
      }}
    >
      <h2 
        className="text-xl font-bold mb-6 text-center"
        style={{ color: '#880e4f' }}
      >
        Textbook Contents
      </h2>
      
      <div className="space-y-3">
        {chapters.map((chapter) => (
          <div 
            key={chapter.id}
            className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
              activeChapter === chapter.id 
                ? 'ring-2' 
                : 'hover:shadow-md'
            }`}
            style={{
              backgroundColor: activeChapter === chapter.id ? '#fce4ec' : '#fff5f7',
              borderColor: activeChapter === chapter.id ? '#ec407a' : '#f8c6d0',
              borderWidth: activeChapter === chapter.id ? '1px' : '0',
              color: activeChapter === chapter.id ? '#880e4f' : '#ad1457'
            }}
            onClick={() => setActiveChapter(chapter.id)}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{chapter.title}</span>
              <span 
                className="text-sm px-2 py-1 rounded-full"
                style={{ backgroundColor: '#f8c6d0', color: '#880e4f' }}
              >
                {chapter.pages} pages
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 rounded-lg text-center" style={{ backgroundColor: '#fce4ec' }}>
        <h3 className="font-bold mb-2" style={{ color: '#880e4f' }}>Book Progress</h3>
        <div className="w-full bg-pink-100 rounded-full h-2.5 mb-2">
          <div 
            className="h-2.5 rounded-full" 
            style={{ width: '45%', backgroundColor: '#ec407a' }}
          ></div>
        </div>
        <p className="text-sm" style={{ color: '#ad1457' }}>45% completed</p>
      </div>
    </div>
  );
};

export default BabyPinkTextbookSidebar;