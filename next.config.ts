import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  experimental: {
    inlineCss: true,
    staleTimes: {
      dynamic: 30,
    },
  },
};

export default nextConfig;
