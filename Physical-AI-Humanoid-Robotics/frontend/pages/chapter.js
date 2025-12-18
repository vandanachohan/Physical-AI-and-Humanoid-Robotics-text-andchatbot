import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import BabyPinkLayout from '../components/BabyPinkLayout';
import BabyPinkChapterView from '../components/BabyPinkChapterView';
import BabyPinkTextbookSidebar from '../components/BabyPinkTextbookSidebar';

const BabyPinkChapterPage = () => {
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);

  // This would normally come from URL params in a real implementation
  // For now, we'll use the sample chapter data
  useEffect(() => {
    // Sample chapter data similar to what's in the textbook API
    const sampleChapter = {
      id: 1,
      title: 'Chapter 1: Overview and History of Physical AI',
      sections: [
        {
          id: '1.1',
          title: 'Overview',
          content: `Physical AI ( fizikal ai ) is an interdisciplinary field that combines artificial intelligence with physical systems. It focuses on creating intelligent machines that can understand, interact with, and adapt to the physical world.

Step-by-step understanding:
1. Perception - Gathering information about the environment
2. Cognition - Processing information to understand and reason
3. Action - Executing movements or tasks in the physical world

Physical AI systems typically integrate sensors, actuators, and intelligent control algorithms to achieve their goals.`,
          learningObjectives: [
            'Understand the fundamental concepts of Physical AI',
            'Explain how Physical AI differs from traditional software-based AI',
            'Identify the key components of Physical AI systems'
          ],
          exercises: [
            'Define physical AI and explain how it differs from traditional software-based AI. Provide at least two examples where physical embodiment is critical for an AI system.',
            'What are the primary motivations behind the development of humanoid robots?',
            'Identify and describe three major challenges in building advanced physical AI systems.'
          ]
        },
        {
          id: '1.2',
          title: 'History',
          content: `The field of Physical AI has evolved significantly since the early days of robotics. Key developments include:

- 1950s: First programmable robots
- 1960s: Introduction of sensor feedback systems
- 1980s: Development of autonomous robots
- 2000s: Integration of machine learning in robotics
- 2010s: Advancement in humanoid robots and AI integration`
        }
      ],
      prevChapter: null, // Add previous chapter reference
      nextChapter: 2      // Add next chapter reference
    };

    // Simulate loading
    setTimeout(() => {
      setChapter(sampleChapter);
      setLoading(false);
    }, 300);
  }, []);

  return (
    <>
      <Head>
        <title>Chapter - Physical AI & Humanoid Robotics</title>
        <meta name="description" content="Read chapter from Physical AI & Humanoid Robotics textbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BabyPinkLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - 30% width on large screens */}
            <div className="lg:w-3/12">
              <BabyPinkTextbookSidebar />
            </div>

            {/* Main content - 70% width on large screens */}
            <div className="lg:w-9/12">
              {loading ? (
                <div className="bg-white rounded-xl p-8 shadow-lg" style={{ backgroundColor: '#fff8f7' }}>
                  <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: '#ec407a' }}></div>
                  </div>
                </div>
              ) : (
                <BabyPinkChapterView chapter={chapter} />
              )}
            </div>
          </div>
        </div>
      </BabyPinkLayout>
    </>
  );
};

export default BabyPinkChapterPage;