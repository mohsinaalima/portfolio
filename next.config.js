/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    // This tells Vercel: DO NOT fail the build if TypeScript has errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This tells Vercel: DO NOT fail the build if ESLint has errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
