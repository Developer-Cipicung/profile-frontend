import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "profile-cipicung-api.vercel.app",
        pathname: "/api/v1/images/**",
      },
      {
        protocol: "https",
        hostname: "profile-cipicung-api.vercel.app",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
