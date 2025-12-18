// pages/404.js
import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../components/MainLayout';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404: Page Not Found - Physical AI & Humanoid Robotics</title>
        <meta name="description" content="Page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[70vh]">
          <div className="text-center max-w-lg">
            <div className="text-9xl font-bold text-[#332a52] mb-4">404</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-[#332a52] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4f46e5] transition duration-300 mr-4"
            >
              Go Home
            </Link>
            <Link 
              href="/tutorials" 
              className="inline-block bg-white text-[#332a52] border border-[#332a52] px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition duration-300"
            >
              Browse Tutorials
            </Link>
          </div>
        </div>
      </MainLayout>
    </>
  );
}