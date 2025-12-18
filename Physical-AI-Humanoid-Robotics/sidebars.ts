import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manual sidebar configuration for Physical AI & Humanoid Robotics textbook
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Physical AI & Humanoid Robotics',
      collapsible: false,
      items: [
        'intro',
        'ch1-overview-history',
        'ch2-foundations',
        'ch3-sensors',
        'ch4-actuators',
        'ch5-control-systems',
        'ch6-ml-robotics',
        'ch7-computer-vision',
        'ch8-nlp-robotics',
        'ch9-motion-planning',
        'ch10-path-planning',
        'ch11-hri',
        'ch12-software-frameworks',
        'ch13-hardware-components',
        'ch14-industrial-robotics',
        'ch15-medical-robotics',
        'ch16-agricultural-robotics',
        'ch17-autonomous-vehicles',
        'ch18-ai-safety-ethics',
      ],
    },
  ],
};

export default sidebars;
