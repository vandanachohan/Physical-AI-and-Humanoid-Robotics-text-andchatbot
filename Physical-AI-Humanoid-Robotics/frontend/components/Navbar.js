import { useState } from 'react';
import Link from 'next/link';
import { useUser } from '../src/contexts/UserContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, loading } = useUser();

  const handleLogout = async () => {
    await logout();
    // Optionally redirect to home or show a message
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-40 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-[#332a52] font-bold text-xl">Physical AI & Robotics</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#332a52] font-medium transition-colors">
              Home
            </Link>
            <Link href="/tutorials" className="text-gray-700 hover:text-[#332a52] font-medium transition-colors">
              Tutorials
            </Link>
            <Link href="/ai-tutor" className="text-gray-700 hover:text-[#332a52] font-medium transition-colors">
              AI Tutor
            </Link>

            {/* Auth links - only show if not authenticated and not loading */}
            {!loading && !user && (
              <>
                <Link href="/login" className="text-gray-700 hover:text-[#332a52] font-medium transition-colors">
                  Sign In
                </Link>
                <Link href="/signup" className="bg-[#332a52] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#4f46e5] transition duration-300">
                  Sign Up
                </Link>
              </>
            )}

            {/* Show loading indicator while checking auth status */}
            {loading && (
              <div className="flex items-center">
                <span className="text-gray-700">Loading...</span>
              </div>
            )}

            {/* User profile - show if authenticated */}
            {!loading && user && (
              <div className="relative group">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-semibold">
                    {user.name?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <span className="text-gray-700 font-medium">{user.name || user.email}</span>
                </button>

                {/* Dropdown menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#332a52] focus:outline-none"
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#332a52] hover:bg-gray-50">
            Home
          </Link>
          <Link href="/tutorials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#332a52] hover:bg-gray-50">
            Tutorials
          </Link>
          <Link href="/ai-tutor" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#332a52] hover:bg-gray-50">
            AI Tutor
          </Link>

          {/* Mobile auth links */}
          {!loading && !user && (
            <>
              <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#332a52] hover:bg-gray-50">
                Sign In
              </Link>
              <Link href="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#332a52] hover:bg-[#4f46e5]">
                Sign Up
              </Link>
            </>
          )}

          {/* Show loading indicator while checking auth status */}
          {loading && (
            <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">
              Loading...
            </div>
          )}

          {/* Mobile user profile */}
          {!loading && user && (
            <>
              <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">
                Welcome, {user.name || user.email}
              </div>
              <button
                onClick={handleLogout}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#332a52] hover:bg-gray-50 w-full text-left"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;