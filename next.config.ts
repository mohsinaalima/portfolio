import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
