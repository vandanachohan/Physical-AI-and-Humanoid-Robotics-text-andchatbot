const { spawn } = require('child_process');
const path = require('path');

// Change to the project directory
const projectDir = 'E:\\Hackatone-1- Physical AI & Humanoid Robotics\\Physical-AI-Humanoid-Robotics';

console.log('Starting Docusaurus development server...');
console.log(`Project directory: ${projectDir}`);

// Run the docusaurus start command
const docusaurusProcess = spawn('npx', ['docusaurus', 'start'], {
  cwd: projectDir,
  stdio: 'inherit',
  shell: true
});

docusaurusProcess.on('error', (err) => {
  console.error('Failed to start Docusaurus:', err.message);
});

docusaurusProcess.on('close', (code) => {
  console.log(`Docusaurus process exited with code ${code}`);
});