import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.stomko.ru" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@heroicons/react"],
  },
};

export default nextConfig;
