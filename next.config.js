/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.VERCEL ? '.next' : '.next.nosync',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'ruipro.store',
      }
    ]
  }
};

module.exports = nextConfig;
