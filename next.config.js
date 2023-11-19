/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net"
      }
    ]
  },
  env: {
    baseUrl: 'https://api.jikan.moe/v4',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
