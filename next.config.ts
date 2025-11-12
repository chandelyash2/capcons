import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Custom config options */
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.capcons.com",
      },
   
    ],
  },
};

export default nextConfig;
