/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net"
      }
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
