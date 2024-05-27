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
  reactStrictMode: true,
}

module.exports = nextConfig
