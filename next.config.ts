import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
