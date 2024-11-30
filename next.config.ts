import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// next.config.js
module.exports = {
  images: {
    domains: [
      'cdn.shopify.com',      // Shopify domain
      'tse4.mm.bing.net',     // Bing domain
      '4.bp.blogspot.com',    // Blogger domain
    ],
  },
};


