/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/kinesphere-v2', // Replace with your repository name
}

module.exports = nextConfig
