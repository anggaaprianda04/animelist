/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api.jikan.moe/v4",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "no-cache, no-store, max-age=120, must-revalidate" },
          { key: "If-None-Match", value: "x234dff" }
        ]
      },
    ]
  },
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
  // env: {
  //   baseUrl: 'https://api.jikan.moe/v4',
  // },
  reactStrictMode: true,
}

module.exports = nextConfig
