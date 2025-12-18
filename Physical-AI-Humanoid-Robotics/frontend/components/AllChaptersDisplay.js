import React, { useState, useEffect } from 'react';

const AllChaptersDisplay = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch chapters from the API
    const fetchChapters = async () => {
      try {
        // Since we're using Next.js, we'll use the API endpoint
        // In a real implementation, we'd call the API route
        // For now, we'll use the sample data structure from the API
        const sampleChapters = [
          {
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

Physical AI systems typically integrate sensors, actuators, and intelligent control algorithms to achieve their goals.`
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
            ]
          },
          {
            id: 2,
            title: 'Chapter 2: Foundations of Physical AI',
            sections: [
              {
                id: '2.1',
                title: 'Introduction',
                content: `The foundations of Physical AI include several core concepts:

1. Embodiment: The idea that intelligence is deeply connected to the physical form and interaction with the environment.
2. Morphological Computation: How the physical properties of the body contribute to intelligent behavior.
3. Active Perception: The process of sensing by doing, where actions are used to gather better information.
4. Control Theory: Mathematical frameworks for controlling dynamic systems.

These foundations provide the theoretical basis for developing intelligent physical systems.`
              }
            ]
          },
          {
            id: 3,
            title: 'Chapter 3: Sensors in Robotics',
            sections: [
              {
                id: '3.1',
                title: 'Sensor Types',
                content: `Sensors in robotics function similarly to human senses ( انسانی حواس ), providing the robot with information about its environment and internal state. Common sensors include:

1. Proprioceptive sensors: Measure internal states like joint angles and motor position
2. Exteroceptive sensors: Perceive external environment, such as cameras for vision and microphones for sound
3. Force/torque sensors: Measure interaction forces with objects and environment

Types of sensors:
- Vision sensors (cameras)
- Auditory sensors (microphones)
- Tactile sensors
- Range sensors (lidar, ultrasonic)
- Inertial sensors (gyroscopes, accelerometers)`
              }
            ]
          },
          {
            id: 4,
            title: 'Chapter 4: Actuators in Robotics',
            sections: [
              {
                id: '4.1',
                title: 'Actuator Types',
                content: `Actuators ( ایکچوایٹرز ) are components that enable robots to move and interact with their environment. They are essentially the "muscles" of a robot, converting energy (usually electrical) into mechanical motion.

Types of actuators:
1. Electric motors: Most common in humanoid robots due to precision and controllability
2. Servo motors: Provide precise angular control for joint movements
3. Linear actuators: Create straight-line motion for specific applications
4. Hydraulic actuators: Provide high force but require complex fluid systems
5. Pneumatic actuators: Use compressed air for movement

In humanoid robotics, actuators must be carefully selected to mimic human-like motion while providing sufficient power and precision.`
              }
            ]
          },
          {
            id: 5,
            title: 'Chapter 5: Control Systems for Robotics',
            sections: [
              {
                id: '5.1',
                title: 'Control Theory',
                content: `Control systems in robotics manage the behavior of robots by processing sensor data and commanding actuators. Key concepts include:

1. Feedback control: Using sensor data to adjust system behavior
2. Feedforward control: Anticipating system responses
3. PID controllers: Proportional-Integral-Derivative controllers for precise control
4. Adaptive control: Systems that adjust parameters based on changing conditions

For humanoid robots, control systems must maintain balance, coordinate multiple joints, and respond to environmental changes in real-time.`
              }
            ]
          },
          {
            id: 9,
            title: 'Chapter 9: Motion Planning',
            sections: [
              {
                id: '9.1',
                title: 'Motion Planning Algorithms',
                content: `Motion planning in robotics involves determining a sequence of movements to achieve a goal while avoiding obstacles.

Step-by-step approach:
1. Path planning - Calculate a geometric route from start to goal
2. Trajectory planning - Add timing and kinematic constraints to the path
3. Control execution - Send commands to actuators to follow the planned trajectory

Common algorithms:
- A* (A-star) for pathfinding
- RRT (Rapidly-exploring Random Trees)
- Potential Fields
- Sampling-based methods

For humanoid robots, motion planning must consider balance, joint limits, and dynamic constraints.`
              }
            ]
          },
          {
            id: 18,
            title: 'Chapter 18: AI Safety and Ethics',
            sections: [
              {
                id: '18.1',
                title: 'AI Safety Considerations',
                content: `As physical AI systems become more capable, safety and ethical considerations become paramount. Key areas include:

1. Physical Safety: Ensuring robots do not harm humans or themselves
2. Behavioral Control: Maintaining appropriate robot behavior
3. Privacy: Protecting human privacy when robots sense their environment
4. Transparency: Understanding robot decision-making processes
5. Accountability: Determining responsibility for robot actions

For humanoid robots, special considerations include human-robot interaction and the potential for deception.`
              }
            ]
          }
        ];

        // Simulate API delay
        setTimeout(() => {
          setChapters(sampleChapters);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching chapters:', error);
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  if (loading) {
    return (
      <div className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#332a52]"></div>
            <p className="mt-4 text-lg text-gray-600">Loading chapters...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Complete Textbook Content</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">All chapters of the Physical AI & Humanoid Robotics textbook available in one place</p>
          <div className="w-24 h-1 bg-[#332a52] mx-auto mt-4"></div>
        </div>

        <div className="space-y-16">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start mb-6">
                <div className="bg-indigo-100 text-indigo-800 rounded-lg px-4 py-2 font-bold mr-4">
                  Ch {chapter.id}
                </div>
                <h3 className="text-2xl font-bold text-[#332a52] flex-1">{chapter.title}</h3>
              </div>

              <div className="space-y-8">
                {chapter.sections?.map((section) => (
                  <div key={section.id || section.title} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#ec407a] text-white flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-sm font-bold">{section.id}</span>
                      </div>
                      <h4 className="text-xl font-bold" style={{ color: '#880e4f' }}>{section.title}</h4>
                    </div>

                    <div className="prose max-w-none text-gray-700 leading-relaxed pl-13">
                      {section.content &&
                        section.content.split('\n\n').map((paragraph, index) => {
                          if (paragraph.startsWith('# ')) {
                            return <h1 key={index} className="text-3xl font-bold mt-6 mb-4">{paragraph.substring(2)}</h1>;
                          } else if (paragraph.startsWith('## ')) {
                            return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 text-[#332a52]">{paragraph.substring(3)}</h2>;
                          } else if (paragraph.startsWith('### ')) {
                            return <h3 key={index} className="text-xl font-semibold mt-4 mb-2 text-[#5a4e7d]">{paragraph.substring(4)}</h3>;
                          } else if (paragraph.match(/^\d+\.\s/)) {
                            // Handle numbered lists
                            const listItems = paragraph.split('\n').filter(item => item.trim() !== '');
                            return (
                              <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
                                {listItems.map((item, idx) => (
                                  <li key={idx} className="pl-2">{item.replace(/^\d+\.\s/, '')}</li>
                                ))}
                              </ol>
                            );
                          } else if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                            // Handle bullet points
                            const listItems = paragraph.split('\n').filter(item => item.trim() !== '');
                            return (
                              <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                                {listItems.map((item, idx) => (
                                  <li key={idx} className="pl-2">{item.replace(/^[-*]\s/, '')}</li>
                                ))}
                              </ul>
                            );
                          }

                          return <p key={index} className="mb-4">{paragraph}</p>;
                        })
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">© 2023 Physical AI & Humanoid Robotics Textbook</p>
          <div className="flex justify-center space-x-6">
            <button className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllChaptersDisplay;