/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.myanimelist.net",
      },
      {
        protocol: 'https',
        hostname: "placehold.co"
      },
    ]
  },
  env: {
    baseUrl: 'https://api.jikan.moe/v4',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
