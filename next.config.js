/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true
  },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig 