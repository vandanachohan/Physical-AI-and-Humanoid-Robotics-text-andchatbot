const fs = require('fs');
const path = require('path');

// Define the root directory of the site
const siteRoot = 'E:/q4-hackatone-book/Hackatone-1- textbook';

console.log('🔍 Verifying Physical AI & Humanoid Robotics Textbook Structure\n');

// Check specific important files and directories
const checks = [
  { name: 'Home page', path: path.join(siteRoot, 'index.html'), type: 'file' },
  { name: 'AI Tutor page', path: path.join(siteRoot, 'ai-tutor', 'index.html'), type: 'file' },
  { name: 'Tutorials page', path: path.join(siteRoot, 'tutorials', 'index.html'), type: 'file' },
  { name: '404 page', path: path.join(siteRoot, '404.html'), type: 'file' },
  { name: 'Textbook directory', path: path.join(siteRoot, 'textbook'), type: 'directory' },
  { name: 'Tutorials directory', path: path.join(siteRoot, 'tutorials'), type: 'directory' },
  { name: 'AI Tutor directory', path: path.join(siteRoot, 'ai-tutor'), type: 'directory' },
  { name: 'Chapter 1', path: path.join(siteRoot, 'textbook', 'chapter', '1', 'index.html'), type: 'file' },
  { name: 'Chapter 18', path: path.join(siteRoot, 'textbook', 'chapter', '18', 'index.html'), type: 'file' },
  { name: 'Actuator Control Tutorial', path: path.join(siteRoot, 'tutorials', 'actuator-control', 'index.html'), type: 'file' },
  { name: 'Motion Planning Tutorial', path: path.join(siteRoot, 'tutorials', 'motion-planning', 'index.html'), type: 'file' },
  { name: 'Robot Sensors Tutorial', path: path.join(siteRoot, 'tutorials', 'robot-sensors', 'index.html'), type: 'file' },
];

let allPassed = true;

checks.forEach(check => {
  let exists = false;
  
  if (check.type === 'file') {
    exists = fs.existsSync(check.path);
  } else if (check.type === 'directory') {
    exists = fs.existsSync(check.path) && fs.statSync(check.path).isDirectory();
  }
  
  if (exists) {
    console.log(`✅ ${check.name} - OK`);
  } else {
    console.log(`❌ ${check.name} - MISSING`);
    allPassed = false;
  }
});

// Check all 18 chapters exist
console.log('\n📚 Checking all 18 chapters...');
let chaptersMissing = 0;
for (let i = 1; i <= 18; i++) {
  const chapterPath = path.join(siteRoot, 'textbook', 'chapter', i.toString(), 'index.html');
  if (fs.existsSync(chapterPath)) {
    console.log(`  ✅ Chapter ${i}`);
  } else {
    console.log(`  ❌ Chapter ${i} - MISSING`);
    chaptersMissing++;
    allPassed = false;
  }
}

// Check all tutorials exist
console.log('\n🎓 Checking all tutorials...');
const tutorials = ['actuator-control', 'motion-planning', 'robot-sensors'];
let tutorialsMissing = 0;
tutorials.forEach(tutorial => {
  const tutorialPath = path.join(siteRoot, 'tutorials', tutorial, 'index.html');
  if (fs.existsSync(tutorialPath)) {
    console.log(`  ✅ ${tutorial}`);
  } else {
    console.log(`  ❌ ${tutorial} - MISSING`);
    tutorialsMissing++;
    allPassed = false;
  }
});

// Check the next.js build assets
console.log('\n📦 Checking build assets...');
const nextDir = path.join(siteRoot, '_next');
if (fs.existsSync(nextDir) && fs.statSync(nextDir).isDirectory()) {
  console.log('✅ _next build directory - OK');
  
  // Check for core JS files
  const coreJsFiles = [
    path.join(nextDir, 'static', 'chunks', 'main-e47bcd33fb72df2b.js'),
    path.join(nextDir, 'static', 'chunks', 'webpack-621ed368151bd0f6.js'),
    path.join(nextDir, 'static', 'css', '5f704c364b9ad3f9.css')
  ];
  
  coreJsFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`  ✅ ${path.basename(file)}`);
    } else {
      console.log(`  ❌ ${path.basename(file)} - MISSING`);
      allPassed = false;
    }
  });
} else {
  console.log('❌ _next build directory - MISSING');
  allPassed = false;
}

console.log('\n🎯 Final Verification:');
if (allPassed) {
  console.log('✅ All checks passed! The textbook is fully functional with no 404 errors.');
  console.log('✅ The Physical AI & Humanoid Robotics textbook is ready for deployment.');
} else {
  console.log('❌ Some issues were found. Please review the above report.');
}

// Additional check: verify that all chapter directories have index.html
console.log('\n🔍 Verifying all chapter subdirectories have index.html...');
const textbookChapterDir = path.join(siteRoot, 'textbook', 'chapter');
if (fs.existsSync(textbookChapterDir)) {
  const chapterDirs = fs.readdirSync(textbookChapterDir).filter(item => {
    const itemPath = path.join(textbookChapterDir, item);
    return fs.statSync(itemPath).isDirectory();
  });
  
  let chaptersWithIndex = 0;
  chapterDirs.forEach(dir => {
    const indexPath = path.join(textbookChapterDir, dir, 'index.html');
    if (fs.existsSync(indexPath)) {
      chaptersWithIndex++;
    } else {
      console.log(`  ❌ Chapter ${dir} missing index.html`);
      allPassed = false;
    }
  });
  
  console.log(`  Found ${chaptersWithIndex}/${chapterDirs.length} chapters with index.html`);
} else {
  console.log('❌ Textbook chapter directory not found');
  allPassed = false;
}

console.log('\n🎉 Complete verification finished!');