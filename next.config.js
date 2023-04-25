/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.bstatic.com",
      },
    ],
  },
};

module.exports = nextConfig;
