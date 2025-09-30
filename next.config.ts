import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mediumslateblue-seahorse-306408.hostingersite.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        // Match ONLY when something comes after /our-clinic/
        source: "/our-clinic/:path+",
        destination: "/our-clinic",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
