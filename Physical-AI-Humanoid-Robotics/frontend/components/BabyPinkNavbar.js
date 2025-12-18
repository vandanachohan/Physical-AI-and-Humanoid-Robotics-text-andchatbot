import { useState } from 'react';
import Link from 'next/link';

const BabyPinkNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-40 top-0" style={{ backgroundColor: '#fff8f7', boxShadow: '0 4px 6px rgba(248, 198, 208, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-[#ec407a] font-bold text-xl">Pretty Pink Library</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#880e4f] hover:text-[#ec407a] font-medium transition-colors">
              Home
            </Link>
            <Link href="/#books" className="text-[#880e4f] hover:text-[#ec407a] font-medium transition-colors">
              Books
            </Link>
            <Link href="/#collection" className="text-[#880e4f] hover:text-[#ec407a] font-medium transition-colors">
              Collection
            </Link>
            <Link href="/#about" className="text-[#880e4f] hover:text-[#ec407a] font-medium transition-colors">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#880e4f] hover:text-[#ec407a] focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg" style={{ backgroundColor: '#fff8f7' }}>
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-[#880e4f] hover:text-[#ec407a] hover:bg-[#fcd3e1]">
            Home
          </Link>
          <Link href="/#books" className="block px-3 py-2 rounded-md text-base font-medium text-[#880e4f] hover:text-[#ec407a] hover:bg-[#fcd3e1]">
            Books
          </Link>
          <Link href="/#collection" className="block px-3 py-2 rounded-md text-base font-medium text-[#880e4f] hover:text-[#ec407a] hover:bg-[#fcd3e1]">
            Collection
          </Link>
          <Link href="/#about" className="block px-3 py-2 rounded-md text-base font-medium text-[#880e4f] hover:text-[#ec407a] hover:bg-[#fcd3e1]">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BabyPinkNavbar;