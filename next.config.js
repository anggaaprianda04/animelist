/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/anime",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: 's-maxage=1, stale-while-revalidate=59' },
          { key: "If-None-Match", value: "x234dff" },
        ]
      },
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.myanimelist.net",
      },
    ]
  },
  reactStrictMode: false,
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
