import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Basic configuration for Vercel deployment
  turbopack: {
    // Enable turbopack for faster builds
  },
  
  // Reduce console noise in development
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  
  // Optimize for production
  experimental: {
    // Reduce bundle size
    optimizePackageImports: ['lucide-react'],
  },
  
  // Compress images and assets
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Suppress console warnings in production
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

export default nextConfig;