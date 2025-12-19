// pages/api/search.js

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  // Dynamically import required modules
  const fs = require('fs');
  const path = require('path');
  const matter = require('gray-matter');

  // Read all content files to create search index
  const contentDirectory = path.join(process.cwd(), 'content');
  const allFiles = getAllFiles(contentDirectory, fs, path);

  const searchResults = [];

  for (const file of allFiles) {
    if (file.endsWith('.md') || file.endsWith('.mdx')) {
      const fileContents = fs.readFileSync(file, 'utf8');
      const { data, content } = matter(fileContents);

      // Extract the chapter number from the filename
      const fileName = path.basename(file);
      const chapterMatch = fileName.match(/^ch(\d+)(?:-|$)/);
      const chapterNumber = chapterMatch ? chapterMatch[1] : 'unknown';

      // Create a search item
      const searchItem = {
        id: fileName,
        sectionId: `${chapterNumber}.1`,
        title: data.title || fileName.replace('.md', '').replace('.mdx', ''),
        content: content,
        fileName: fileName
      };

      // Check if query matches in title or content
      if (
        searchItem.title.toLowerCase().includes(query.toLowerCase()) ||
        searchItem.content.toLowerCase().includes(query.toLowerCase())
      ) {
        searchResults.push(searchItem);
      }
    }
  }

  // Simple search implementation - filter and return top results
  const results = searchResults.slice(0, 10); // Return top 10 results

  res.status(200).json({ results });
}

// Helper function to recursively get all files in a directory
function getAllFiles(dirPath, fs, path, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), fs, path, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}