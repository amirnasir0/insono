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
      // {
      //   // Match ONLY when something comes after /our-clinic/
      //   source: "/our-clinic/:path+",
      //   destination: "/our-clinic",
      //   permanent: true,
      // },
      {
        source: "/our-clinic/insono-hearing-clinic-deoghar",
        destination: "/our-clinic/deoghar",
        permanent: true, // 301 redirect (SEO-friendly)
      },


       {
        source: "/blog/hearing-aid-prices-in-2025-latest-price-list-and-buying-guide",
        destination: "/hearing-aid-price",
        permanent: true, // 301 redirect (SEO-friendly)
      },
    ];
  },
};

export default nextConfig;
