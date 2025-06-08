/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const repositoryName = 'kinesphere-frontend'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only apply basePath and assetPrefix in production (GitHub Pages)
  basePath: isProduction ? `/${repositoryName}` : '',
  assetPrefix: isProduction ? `/${repositoryName}/` : '', // Note the trailing slash
  trailingSlash: true, // This ensures relative paths work correctly from all routes
}

module.exports = nextConfig
