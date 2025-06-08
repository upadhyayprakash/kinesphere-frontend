/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure asset handling for local preview and production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  // Only apply basePath in GitHub Pages environment
  basePath: process.env.GITHUB_ACTIONS ? '/kinesphere-frontend' : '',
  trailingSlash: true,
}

module.exports = nextConfig
