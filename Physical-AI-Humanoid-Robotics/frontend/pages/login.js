import React from 'react';
import MainLayout from '../components/MainLayout';
import LoginForm from '../src/components/LoginForm';
import Head from 'next/head';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Sign In - Physical AI & Humanoid Robotics</title>
        <meta name="description" content="Sign in to access the Physical AI & Humanoid Robotics textbook" />
      </Head>
      <MainLayout>
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[70vh]">
          <div className="w-full max-w-md">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign In</h1>
              <LoginForm />
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <a href="/signup" className="text-[#332a52] font-medium hover:underline">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default LoginPage;