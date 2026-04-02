import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ldqhy3xs1xoqq2fu.public.blob.vercel-storage.com',
        // Optional: add port and pathname for more specific control
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ],
  },
};

export default nextConfig;
