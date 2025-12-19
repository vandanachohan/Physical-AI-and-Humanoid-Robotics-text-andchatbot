#!/usr/bin/env node

// This script modifies the Docusaurus config for GitHub Pages deployment
const fs = require('fs');
const path = require('path');

// Read the current docusaurus config
const configPath = path.join(__dirname, 'Physical-AI-Humanoid-Robotics', 'docusaurus.config.ts');
let configContent = fs.readFileSync(configPath, 'utf8');

// For GitHub Pages, we need to set the correct baseUrl
// It should match the repository name
configContent = configContent.replace(
  /baseUrl: '\/Physical-AI-and-Humanoid-Robotics-text-andchatbot\/',/, 
  "baseUrl: '/Physical-AI-Humanoid-Robotics/',"
);

// Write the modified config back
fs.writeFileSync(configPath, configContent);

console.log('Updated docusaurus.config.ts for GitHub Pages deployment (changed baseUrl to \'/Physical-AI-Humanoid-Robotics/\')');