 
 const isGithub = process.env.DEPLOY_TARGET === 'gh';

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const vercelConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
};

const githubConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/Physical-AI-and-Humanoid-Robotics-text-andchatbot',
  assetPrefix: '/Physical-AI-and-Humanoid-Robotics-text-andchatbot',
};

module.exports = withMDX(isGithub ? githubConfig : vercelConfig);
