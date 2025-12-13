/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import MainLayout from '../components/MainLayout';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import TutorialsSection from '../components/TutorialsSection';
import ContactSection from '../components/ContactSection';
import AllChaptersDisplay from '../components/AllChaptersDisplay';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Physical AI & Humanoid Robotics - Textbook</title>
        <meta name="description" content="Interactive textbook on Physical AI & Humanoid Robotics with AI-powered tutoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        {/* Custom Header with Image and Icons */}
        <header className="py-10 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Physical AI & Humanoid Robotics</h1>
              <p className="text-xl mb-8 text-indigo-100">Explore the fascinating world of intelligent physical systems</p>
              <div className="flex space-x-4">
                <Link
                  href="/textbook/chapter/1"
                  className="bg-white text-indigo-700 px-6 py-3 rounded-full font-bold hover:bg-indigo-100 transition duration-300 flex items-center"
                >
                  Start Learning 🚀
                </Link>
                <Link
                  href="#chapters"
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-bold hover:bg-indigo-600 transition duration-300"
                >
                  Browse Chapters
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img
                  src="/images/book-cover.svg"
                  alt="Physical AI & Humanoid Robotics Book Cover"
                  className="w-64 h-96 object-cover rounded-lg shadow-2xl"
                />
                {/* Floating icons around the image */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-pink-500 rounded-full p-3 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full p-3 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>

        <BlogSection />
        <TutorialsSection />

        {/* All Chapters Display Section */}
        <div id="chapters">
          <AllChaptersDisplay />
        </div>

        <ContactSection />

        {/* Baby Pink Book Theme Section */}
        <section className="py-16" style={{ backgroundColor: 'var(--background-color)' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Looking for a Beautiful Book Experience?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Discover our pretty baby pink themed book website with a delightful reading experience
            </p>
            <Link
              href="/baby-pink-book"
              className="inline-block bg-[#ec407a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d81b60] transition duration-300 shadow-lg hover:shadow-xl"
            >
              Visit Pretty Pink Book Site
            </Link>
          </div>
        </section>
      </MainLayout>
    </>
  );
}