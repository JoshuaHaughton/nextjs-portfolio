/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ 'upload.wikimedia.org', 'cdn.iconscout.com'],
  },
}

module.exports = nextConfig
