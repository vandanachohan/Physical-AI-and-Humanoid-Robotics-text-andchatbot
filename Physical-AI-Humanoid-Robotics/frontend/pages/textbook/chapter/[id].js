import React from 'react';
import TextbookLayout from '../../../components/TextbookLayout';
import ChapterContent from '../../../components/ChapterContent';

const ChapterPage = ({ chapterData, id, prevChapter, nextChapter }) => {
  if (!chapterData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Chapter Not Found</h1>
          <p className="text-gray-600 mb-4">The chapter you're looking for doesn't exist.</p>
          <a href="/textbook/chapter/1" className="px-4 py-2 bg-[#332a52] text-white rounded-lg hover:bg-[#4f46e5] transition-colors">
            Go to Chapter 1
          </a>
        </div>
      </div>
    );
  }

  // Structure the content for the ChapterContent component
  const structuredChapter = {
    id: parseInt(id),
    title: chapterData.title || `Chapter ${id}`,
    sections: [
      {
        id: `${id}.1`,
        title: chapterData.title || `Chapter ${id}`,
        content: chapterData.content
      }
    ]
  };

  return (
    <TextbookLayout currentChapter={structuredChapter} prevChapter={prevChapter} nextChapter={nextChapter}>
      <ChapterContent chapter={structuredChapter} />
    </TextbookLayout>
  );
};

// For static export, we need to define all possible paths
export async function getStaticPaths() {
  const fs = require('fs');
  const path = require('path');

  // Read all content files and extract chapter numbers
  const contentDirectory = path.join(process.cwd(), 'content');
  const chapterFiles = fs.readdirSync(contentDirectory);

  // Filter for chapter files (ch1-xx.md, ch2-xx.md, etc.)
  const chapterFileNames = chapterFiles
    .filter(file => file.startsWith('ch') && (file.endsWith('.md') || file.endsWith('.mdx')))
    .map(file => {
      const fileNumber = file.match(/\d+/)[0]; // Extract chapter number
      return { id: fileNumber };
    });

  const paths = chapterFileNames.map((file) => ({
    params: { id: file.id }
  }));

  return {
    paths,
    fallback: false // Don't generate any other routes at runtime
  };
}

export async function getStaticProps({ params }) {
  const fs = require('fs');
  const path = require('path');
  const matter = require('gray-matter');

  const contentDirectory = path.join(process.cwd(), 'content');
  const chapterFiles = fs.readdirSync(contentDirectory);

  // Calculate prev/next chapters based on the actual available files
  const chapterFileNames = chapterFiles
    .filter(file => file.startsWith('ch') && (file.endsWith('.md') || file.endsWith('.mdx')))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
    });

  const currentFileIndex = chapterFileNames.findIndex(file => {
    const fileNumber = parseInt(file.match(/\d+/)[0]);
    return fileNumber === parseInt(params.id);
  });

  const prevChapter = currentFileIndex > 0 ? {
    id: parseInt(chapterFileNames[currentFileIndex - 1].match(/\d+/)[0]),
    title: `Chapter ${parseInt(chapterFileNames[currentFileIndex - 1].match(/\d+/)[0])}`
  } : null;

  const nextChapter = currentFileIndex < chapterFileNames.length - 1 ? {
    id: parseInt(chapterFileNames[currentFileIndex + 1].match(/\d+/)[0]),
    title: `Chapter ${parseInt(chapterFileNames[currentFileIndex + 1].match(/\d+/)[0])}`
  } : null;

  // Find the specific chapter file
  const chapterFile = chapterFiles.find(file => {
    const fileNumber = file.match(/\d+/);
    return fileNumber && fileNumber[0] === params.id && (file.endsWith('.md') || file.endsWith('.mdx'));
  });

  if (!chapterFile) {
    return {
      props: {
        chapterData: null,
        id: params.id,
        prevChapter: null,
        nextChapter: null
      }
    };
  }

  const filePath = path.join(contentDirectory, chapterFile);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      chapterData: {
        ...data,
        content
      },
      id: params.id,
      prevChapter,
      nextChapter
    }
  };
}

export default ChapterPage;