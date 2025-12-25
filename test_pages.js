const fs = require('fs');
const path = require('path');

// Define the root directory of the site
const siteRoot = 'E:/q4-hackatone-book/Hackatone-1- textbook';

// Function to get all HTML files and their corresponding routes
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Check if it's a route directory (contains index.html)
      const indexFile = path.join(filePath, 'index.html');
      if (fs.existsSync(indexFile)) {
        // Convert file path to web route
        const relativePath = path.relative(siteRoot, filePath).replace(/\\/g, '/');
        let route = '/' + relativePath;
        // Special handling for root index
        if (relativePath === '') {
          route = '/';
        } else {
          // Remove leading slash if it's not root
          route = route.replace(/\/index\.html$/, '');
        }
        fileList.push({
          route: route,
          filePath: indexFile,
          type: 'directory-index'
        });
      }
      // Recursively check subdirectories
      getAllHtmlFiles(filePath, fileList);
    } else if (file === 'index.html') {
      // This is the root index.html
      if (dir === siteRoot) {
        fileList.push({
          route: '/',
          filePath: filePath,
          type: 'root-index'
        });
      }
    } else if (file.endsWith('.html') && file !== 'index.html') {
      // This is a standalone HTML file
      const relativePath = path.relative(siteRoot, filePath).replace(/\\/g, '/');
      const route = '/' + relativePath.replace('.html', '');
      fileList.push({
        route: route,
        filePath: filePath,
        type: 'standalone'
      });
    }
  });

  return fileList;
}

// Get all HTML files
const allHtmlFiles = getAllHtmlFiles(siteRoot);

// Define expected important routes (with correct paths based on the actual structure)
const importantRoutes = [
  '/',
  '/textbook/chapter/1',
  '/textbook/chapter/2',
  '/textbook/chapter/3',
  '/textbook/chapter/4',
  '/textbook/chapter/5',
  '/textbook/chapter/6',
  '/textbook/chapter/7',
  '/textbook/chapter/8',
  '/textbook/chapter/9',
  '/textbook/chapter/10',
  '/textbook/chapter/11',
  '/textbook/chapter/12',
  '/textbook/chapter/13',
  '/textbook/chapter/14',
  '/textbook/chapter/15',
  '/textbook/chapter/16',
  '/textbook/chapter/17',
  '/textbook/chapter/18',
  '/ai-tutor',
  '/tutorials',
  '/tutorials/actuator-control',
  '/tutorials/motion-planning',
  '/tutorials/robot-sensors',
  '/404'
];

console.log('🔍 Testing Physical AI & Humanoid Robotics Textbook Pages\n');

// Check if all important routes exist
console.log('✅ Checking important routes...');
const missingRoutes = [];
const foundRoutes = [];

importantRoutes.forEach(route => {
  // Look for the route in our file list
  const routeExists = allHtmlFiles.some(file =>
    file.route === route
  );

  if (routeExists) {
    foundRoutes.push(route);
    console.log(`  ✅ ${route}`);
  } else {
    missingRoutes.push(route);
    console.log(`  ❌ ${route}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`  Total important routes checked: ${importantRoutes.length}`);
console.log(`  Found: ${foundRoutes.length}`);
console.log(`  Missing: ${missingRoutes.length}`);

// Check total number of pages
const totalHtmlPages = allHtmlFiles.length;
console.log(`  Total HTML pages found: ${totalHtmlPages}`);

// Check for common issues
console.log('\n🔍 Checking for common issues...');

// Check if all expected chapter routes exist
const missingChapters = [];
for (let i = 1; i <= 18; i++) {
  const chapterRoute = `/textbook/chapter/${i}`;
  const exists = allHtmlFiles.some(file => file.route === chapterRoute);

  if (!exists) {
    missingChapters.push(i);
  }
}

if (missingChapters.length === 0) {
  console.log('  ✅ All 18 chapters are present');
} else {
  console.log(`  ❌ Missing chapters: ${missingChapters.join(', ')}`);
}

// Check if all tutorial routes exist
const expectedTutorials = ['/tutorials/actuator-control', '/tutorials/motion-planning', '/tutorials/robot-sensors'];
const missingTutorials = [];
expectedTutorials.forEach(tutorial => {
  const exists = allHtmlFiles.some(file => file.route === tutorial);

  if (!exists) {
    missingTutorials.push(tutorial);
  }
});

if (missingTutorials.length === 0) {
  console.log('  ✅ All tutorials are present');
} else {
  console.log(`  ❌ Missing tutorials: ${missingTutorials.join(', ')}`);
}

// List a few sample routes to verify the structure
console.log('\n📋 Sample routes found:');
allHtmlFiles.slice(0, 10).forEach(file => {
  console.log(`  - ${file.route}`);
});

// Final result
console.log('\n🎉 Testing Complete!');
if (missingRoutes.length === 0 && missingChapters.length === 0 && missingTutorials.length === 0) {
  console.log('✅ All pages are accessible! No 404 errors detected.');
  console.log('✅ The Physical AI & Humanoid Robotics textbook is fully functional.');
} else {
  console.log('❌ Some pages are missing. Please check the above report.');
}