import React from 'react';

const BabyPinkHeroSection = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-[#f8c6d0] to-[#fcd3e1] text-[#880e4f] py-20 md:py-32"
      style={{ backgroundColor: '#fff8f7' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#ec407a] opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#ba68c8] opacity-20 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-[#ffab91] opacity-20 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Beautiful Book Experience
          </h1>
          <p className="text-xl md:text-2xl text-[#ad1457] mb-6">
            Discover the Magic of Reading with Our Pink-Themed Platform
          </p>
          <p className="text-lg text-[#880e4f] mb-10 max-w-2xl mx-auto opacity-90">
            Immerse yourself in our delightful collection of stories and knowledge, 
            presented in a charming baby pink theme designed to make your reading 
            experience soft, pleasant, and enjoyable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-[#ec407a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d81b60] transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              Browse Books
            </a>
            <a
              href="#"
              className="border-2 border-[#ec407a] text-[#ec407a] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ec407a] hover:text-white transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabyPinkHeroSection;