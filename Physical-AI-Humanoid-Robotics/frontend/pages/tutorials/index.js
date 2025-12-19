// pages/tutorials/index.js
import React from 'react';
import Head from 'next/head';
import MainLayout from '../../components/MainLayout';

const TutorialsPage = ({ tutorials }) => {
  return (
    <>
      <Head>
        <title>Tutorials - Physical AI & Humanoid Robotics</title>
        <meta name="description" content="Interactive tutorials on Physical AI & Humanoid Robotics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#332a52]">Interactive Tutorials</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn about key concepts in Physical AI and Humanoid Robotics with step-by-step guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <a
                key={tutorial.id}
                href={`/tutorials/${tutorial.id}`}
                className="block bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-full bg-[#332a52] flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{tutorial.title}</h3>
                <p className="text-gray-600 mb-4">{tutorial.description || 'Learn more about this topic'}</p>
                <span className="inline-flex items-center text-[#332a52] font-semibold">
                  Start Tutorial
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');
  const matter = require('gray-matter');

  const tutorialsDirectory = path.join(process.cwd(), 'content', 'tutorials');

  if (!fs.existsSync(tutorialsDirectory)) {
    return {
      props: {
        tutorials: []
      }
    };
  }

  const tutorialFiles = fs.readdirSync(tutorialsDirectory);

  const tutorials = tutorialFiles
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(tutorialsDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // Extract ID from filename (without extension)
      const id = file.replace('.md', '').replace('.mdx', '');

      return {
        id,
        title: data.title || id,
        description: data.description || data.excerpt || 'Learn more about this topic'
      };
    });

  return {
    props: {
      tutorials
    }
  };
}

export default TutorialsPage;