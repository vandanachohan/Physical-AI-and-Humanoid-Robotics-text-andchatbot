// pages/tutorials/[id].js
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import MainLayout from '../../components/MainLayout';

const TutorialPage = ({ tutorialId }) => {
  const [tutorial, setTutorial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll use sample data
    const fetchTutorial = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const sampleTutorials = {
        'robot-sensors': {
          id: 'robot-sensors',
          title: 'Understanding Robot Sensors',
          content: `## Understanding Robot Sensors

### Overview
Sensors in robotics function similarly to human senses, providing the robot with information about its environment and internal state. Common sensors include cameras, microphones, accelerometers, gyroscopes, force sensors, and tactile sensors.

### Types of Sensors
1. **Proprioceptive sensors** - measure internal states like joint angles and motor position
2. **Exteroceptive sensors** - perceive external environment, such as cameras for vision and microphones for sound
3. **Force/torque sensors** - measure interaction forces with objects and environment

### Practical Application
A humanoid robot uses its camera (vision sensor) to recognize objects and its tactile sensors in fingertips to grasp objects with appropriate force.

### Exercise
Design a simple sensing system for a robot navigating a room. What combination of sensors would you use and why?`,
        },
        'actuator-control': {
          id: 'actuator-control',
          title: 'Actuator Control Systems',
          content: `## Actuator Control Systems

### Overview
Actuators are components that enable robots to move and interact with their environment. They are essentially the "muscles" of a robot, converting energy (usually electrical) into mechanical motion.

### Types of Actuators
1. **Electric motors** - most common in humanoid robots due to their precision and controllability
2. **Servo motors** - provide precise angular control for joint movements
3. **Linear actuators** - create straight-line motion for specific applications

### Control Mechanisms
Control systems use feedback loops to ensure actuators move precisely as commanded. PID controllers are commonly used for this purpose.

### Exercise
Consider how a robot arm picks up a delicate object. What type of actuators would allow fine control of grip strength?`,
        },
        'motion-planning': {
          id: 'motion-planning',
          title: 'Motion Planning Algorithms',
          content: `## Motion Planning Algorithms

### Overview
Motion planning in robotics involves determining a sequence of movements to achieve a goal while avoiding obstacles.

### Key Steps
1. **Path planning** - Calculate a geometric route from start to goal
2. **Trajectory planning** - Add timing and kinematic constraints to the path
3. **Control execution** - Send commands to actuators to follow the planned trajectory

### Example Application
A humanoid robot planning to step over an obstacle calculates the required leg movement trajectory to avoid collision while maintaining balance.

### Exercise
Think about planning a path for a robot arm to move from point A to point B without hitting any obstacles in a cluttered workspace.`,
        }
      };

      const foundTutorial = sampleTutorials[tutorialId] || {
        id: tutorialId,
        title: 'Tutorial Not Found',
        content: `Sorry, we couldn't find a tutorial with the ID: ${tutorialId}`
      };

      setTutorial(foundTutorial);
      setLoading(false);
    };

    fetchTutorial();
  }, [tutorialId]);

  return (
    <>
      <Head>
        <title>{tutorial?.title || 'Tutorial'} - Physical AI & Humanoid Robotics</title>
        <meta name="description" content={`Learn about ${tutorial?.title || 'robotics tutorials'}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#332a52]"></div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h1 className="text-3xl font-bold mb-6 text-[#332a52]">{tutorial?.title}</h1>
              <div className="prose max-w-none text-gray-700">
                {tutorial?.content ? (
                  tutorial.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 text-[#332a52]">{paragraph.substring(3)}</h2>;
                    } else if (paragraph.startsWith('### ')) {
                      return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-[#5a4e7d]">{paragraph.substring(4)}</h3>;
                    } else if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ') || paragraph.startsWith('5. ')) {
                      // Handle numbered lists
                      const listItems = [];
                      let currentList = [];
                      
                      const lines = tutorial.content.split('\n');
                      for (let i = 0; i < lines.length; i++) {
                        if (lines[i].startsWith('1. ') || lines[i].startsWith('2. ') || lines[i].startsWith('3. ') || lines[i].startsWith('4. ') || lines[i].startsWith('5. ')) {
                          currentList.push(lines[i]);
                        } else if (currentList.length > 0 && !lines[i].startsWith('1. ')) {
                          // End of list
                          break;
                        }
                      }
                      
                      if (paragraph === currentList[0]) {
                        // This is the first item in the list
                        const listContent = currentList.map((item, idx) => (
                          <li key={idx} className="mb-2">{item.substring(3)}</li>
                        ));
                        return <ol key={index} className="list-decimal pl-6 mb-4">{listContent}</ol>;
                      }
                    }
                    
                    return <p key={index} className="mb-4">{paragraph}</p>;
                  })
                ) : (
                  <p>Tutorial not found.</p>
                )}
              </div>
              
              <div className="mt-8">
                <a 
                  href="/#tutorials" 
                  className="inline-block bg-[#332a52] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4f46e5] transition duration-300"
                >
                  &larr; Back to Tutorials
                </a>
              </div>
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
};

// This function gets called at build time to generate the static pages
export async function getStaticProps({ params }) {
  return {
    props: {
      tutorialId: params.id
    }
  };
}

// This function gets called at build time to determine which pages to pre-render
export async function getStaticPaths() {
  // Define the tutorial IDs that should be pre-rendered
  const paths = [
    { params: { id: 'robot-sensors' } },
    { params: { id: 'actuator-control' } },
    { params: { id: 'motion-planning' } }
  ];

  return {
    paths,
    fallback: true // Allow other IDs to be generated at request time
  };
}

export default TutorialPage;