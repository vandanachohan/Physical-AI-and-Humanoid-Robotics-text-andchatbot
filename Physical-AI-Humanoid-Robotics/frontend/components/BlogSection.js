import React from 'react';

const BlogSection = () => {
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: 'Introduction to Physical AI',
      description: 'Understanding the fundamentals of Physical AI and its applications in robotics and real-world systems.',
      image: '/api/placeholder/400/250',
      link: '/blog/intro-to-physical-ai'
    },
    {
      id: 2,
      title: 'Actuators in Humanoid Robotics',
      description: 'Explore different types of actuators and their role in enabling humanoid robots to move and interact.',
      image: '/api/placeholder/400/250',
      link: '/blog/actuators-in-humanoid-robotics'
    },
    {
      id: 3,
      title: 'Sensor Integration Techniques',
      description: 'Learn about various sensors used in robotics and how they work together to provide environmental awareness.',
      image: '/api/placeholder/400/250',
      link: '/blog/sensor-integration'
    }
  ];

  return (
    <section className="py-20 bg-[var(--background-color)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">Learning Resources</h2>
          <div className="w-24 h-1 bg-[#332a52] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a
                  href="#"
                  className="text-[#332a52] font-semibold hover:underline flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;