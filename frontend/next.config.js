const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/Physical-AI-and-Humanoid-Robotics-text-andchatbot',
  assetPrefix: '/Physical-AI-and-Humanoid-Robotics-text-andchatbot',
};

module.exports = withMDX(nextConfig);