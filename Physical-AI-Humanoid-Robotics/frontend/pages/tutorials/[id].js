// pages/tutorials/[id].js
import React from 'react';
import Head from 'next/head';
import MainLayout from '../../components/MainLayout';

const TutorialPage = ({ tutorialData, tutorialId }) => {
  if (!tutorialData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Tutorial Not Found</h1>
          <p className="text-gray-600 mb-4">The tutorial you're looking for doesn't exist.</p>
          <a href="/tutorials" className="px-4 py-2 bg-[#332a52] text-white rounded-lg hover:bg-[#4f46e5] transition-colors">
            Back to Tutorials
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{tutorialData.title || 'Tutorial'} - Physical AI & Humanoid Robotics</title>
        <meta name="description" content={`Learn about ${tutorialData.title || 'robotics tutorials'}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-[#332a52]">{tutorialData.title}</h1>
            <div className="prose max-w-none text-gray-700">
              {tutorialData.content ? (
                tutorialData.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 text-[#332a52]">{paragraph.substring(3)}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-[#5a4e7d]">{paragraph.substring(4)}</h3>;
                  } else if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ') || paragraph.startsWith('5. ')) {
                    // Handle numbered lists
                    const listItems = [];
                    let currentList = [];

                    const lines = tutorialData.content.split('\n');
                    for (let i = 0; i < lines.length; i++) {
                      if (lines[i].startsWith('1. ') || lines[i].startsWith('2. ') || lines[i].startsWith('3. ') || lines[i].startsWith('4. ') || lines[i].startsWith('5. ')) {
                        currentList.push(lines[i]);
                      } else if (currentList.length > 0 && !lines[i].startsWith('1. ')) {
                        // End of list
                        break;
                      }
                    }

                    if (paragraph === currentList[0]) {
                      // This is the first item in the list
                      const listContent = currentList.map((item, idx) => (
                        <li key={idx} className="mb-2">{item.substring(3)}</li>
                      ));
                      return <ol key={index} className="list-decimal pl-6 mb-4">{listContent}</ol>;
                    }
                  }

                  return <p key={index} className="mb-4">{paragraph}</p>;
                })
              ) : (
                <p>Tutorial content not found.</p>
              )}
            </div>

            <div className="mt-8">
              <a
                href="/#tutorials"
                className="inline-block bg-[#332a52] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4f46e5] transition duration-300"
              >
                &larr; Back to Tutorials
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

// This function gets called at build time to generate the static pages
export async function getStaticProps({ params }) {
  const fs = require('fs');
  const path = require('path');
  const matter = require('gray-matter');

  const contentDirectory = path.join(process.cwd(), 'content', 'tutorials');

  // Look for the tutorial file with the matching ID
  const tutorialFiles = fs.readdirSync(contentDirectory);
  const tutorialFile = tutorialFiles.find(file =>
    file.replace('.md', '').replace('.mdx', '') === params.id
  );

  if (!tutorialFile) {
    return {
      props: {
        tutorialData: null,
        tutorialId: params.id
      }
    };
  }

  const filePath = path.join(contentDirectory, tutorialFile);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      tutorialData: {
        ...data,
        content
      },
      tutorialId: params.id
    }
  };
}

// This function gets called at build time to determine which pages to pre-render
export async function getStaticPaths() {
  const fs = require('fs');
  const path = require('path');

  const contentDirectory = path.join(process.cwd(), 'content', 'tutorials');
  const tutorialFiles = fs.readdirSync(contentDirectory);

  // Generate paths for all tutorial files
  const paths = tutorialFiles
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => {
      const fileName = file.replace('.md', '').replace('.mdx', '');
      return {
        params: { id: fileName }
      };
    });

  return {
    paths,
    fallback: false
  };
}

export default TutorialPage;