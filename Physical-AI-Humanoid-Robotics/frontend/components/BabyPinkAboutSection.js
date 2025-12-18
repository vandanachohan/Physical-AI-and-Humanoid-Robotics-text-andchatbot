import React from 'react';

const BabyPinkAboutSection = () => {
  return (
    <section 
      className="py-20" 
      id="about"
      style={{ backgroundColor: '#fff5f7' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <div 
                  className="w-full h-full flex items-center justify-center text-white text-6xl font-bold"
                  style={{ backgroundColor: '#f8c6d0' }}
                >
                  📚
                </div>
              </div>
              <div 
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-30"
                style={{ backgroundColor: '#ec407a' }}
              ></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#880e4f' }}>About Our Pink Library</h2>
            <p className="text-lg mb-6" style={{ color: '#ad1457' }}>
              Welcome to our delightful collection of books, carefully curated to provide a soft and 
              pleasant reading experience. Our baby pink theme creates a cozy and welcoming environment 
              for readers of all ages.
            </p>
            <p className="text-lg mb-8" style={{ color: '#ad1457' }}>
              We believe that the joy of reading should be paired with beautiful aesthetics. That's why 
              we've designed our platform with tender, soothing colors that make your reading journey 
              as visually pleasing as it is intellectually rewarding.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#fce4ec' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: '#ec407a' }}>100+</div>
                <div className="font-semibold" style={{ color: '#880e4f' }}>Books</div>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#fce4ec' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: '#ec407a' }}>10K+</div>
                <div className="font-semibold" style={{ color: '#880e4f' }}>Happy Readers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabyPinkAboutSection;