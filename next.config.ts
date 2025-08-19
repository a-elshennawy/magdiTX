import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for Cloudflare Pages static hosting
  trailingSlash: true, // Better compatibility with Cloudflare Pages
  images: {
    unoptimized: true, // Required for static exports
  },

  // Optional performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console logs in production
  },

  // Enable React strict mode for better development
  reactStrictMode: true,

  // Optional: Reduce bundle size further
  experimental: {
    optimizeCss: true, // CSS optimization
  },

  // Webpack configuration to handle cache issues
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Disable cache for client-side builds to avoid large cache files
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
