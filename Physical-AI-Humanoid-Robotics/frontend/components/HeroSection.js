import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative bg-[#332a52] text-white py-20 md:py-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Physical AI & Humanoid Robotics
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200 mb-6">
            Master the Future of Intelligent Physical Systems
          </p>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            Explore the cutting-edge intersection of artificial intelligence and robotics.
            Understand how machines perceive, reason, and act in the physical world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/ai-tutor"
              className="bg-white text-[#332a52] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              Start Learning
            </a>
            <a
              href="/tutorials"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#332a52] transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              View Tutorials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;