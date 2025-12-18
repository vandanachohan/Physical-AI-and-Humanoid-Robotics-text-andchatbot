import React from 'react';

const TutorialsSection = () => {
  // Sample tutorial data
  const tutorials = [
    {
      id: 1,
      title: 'Understanding Robot Sensors',
      description: 'Deep dive into various sensors used in humanoid robotics - cameras, gyroscopes, accelerometers, and more.',
      link: '/tutorials/robot-sensors'
    },
    {
      id: 2,
      title: 'Actuator Control Systems',
      description: 'Learn how to control robotic actuators for precise movement and interaction with the environment.',
      link: '/tutorials/actuator-control'
    },
    {
      id: 3,
      title: 'Motion Planning Algorithms',
      description: 'Explore path planning and trajectory generation for humanoid robots in complex environments.',
      link: '/tutorials/motion-planning'
    }
  ];

  return (
    <section className="py-20 bg-white" id="tutorials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Interactive Tutorials</h2>
          <div className="w-24 h-1 bg-[#332a52] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-[#332a52] flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{tutorial.title}</h3>
              <p className="text-gray-600 mb-4">{tutorial.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-[#332a52] font-semibold hover:underline"
              >
                Start Tutorial
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;