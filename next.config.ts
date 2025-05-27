import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Set to desired size
    },
  },
};

export default nextConfig;
