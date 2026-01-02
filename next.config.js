/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For static exports or if you don't have image optimization
  },
}

module.exports = nextConfig

