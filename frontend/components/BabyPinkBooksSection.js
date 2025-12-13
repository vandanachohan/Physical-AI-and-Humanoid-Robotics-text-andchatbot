import React from 'react';

const BabyPinkBooksSection = () => {
  // Sample book data
  const books = [
    {
      id: 1,
      title: 'The Enchanted Garden',
      description: 'A beautiful tale of friendship and adventure in a magical garden filled with wonder.',
      author: 'Lily Rose',
      coverColor: '#f8c6d0'
    },
    {
      id: 2,
      title: 'Starry Night Dreams',
      description: 'Follow the journey of a young dreamer under the stars, discovering the power of imagination.',
      author: 'Moonbeam Writer',
      coverColor: '#fcd3e1'
    },
    {
      id: 3,
      title: 'Butterfly Wings',
      description: 'A heartwarming story about transformation, growth, and embracing change.',
      author: 'Nature Poet',
      coverColor: '#ffccbc'
    }
  ];

  return (
    <section className="py-20" id="books" style={{ backgroundColor: '#fff8f7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#880e4f' }}>Featured Books</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#ec407a' }}></div>
          <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: '#ad1457' }}>
            Discover our collection of beautifully crafted books, each with its own unique story and charm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border transform hover:-translate-y-1 transition-transform"
              style={{ 
                backgroundColor: '#ffffff', 
                borderColor: '#f8c6d0',
                boxShadow: '0 4px 6px rgba(248, 198, 208, 0.1)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: book.coverColor }}
              >
                {book.title.charAt(0)}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#880e4f' }}>{book.title}</h3>
              <p className="text-sm mb-3" style={{ color: '#ad1457' }}>by {book.author}</p>
              <p className="text-gray-600 mb-4">{book.description}</p>
              <button
                className="inline-flex items-center px-4 py-2 rounded-lg font-semibold"
                style={{ 
                  backgroundColor: '#fce4ec',
                  color: '#ec407a',
                  borderColor: '#ec407a',
                  borderWidth: '1px'
                }}
              >
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BabyPinkBooksSection;