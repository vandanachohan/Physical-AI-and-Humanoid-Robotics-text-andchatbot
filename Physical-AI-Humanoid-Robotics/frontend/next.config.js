const isGithub = process.env.DEPLOY_TARGET === 'gh';

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const vercelConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
};

const githubConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/Physical-AI-and-Humanoid-Robotics-text-andchatbot',
  assetPrefix: '/Physical-AI-and-Humanoid-Robotics-text-andchatbot',
  reactStrictMode: true,
};

module.exports = withMDX(isGithub ? githubConfig : vercelConfig);
