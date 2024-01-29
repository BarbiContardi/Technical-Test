/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-hook-mousetrap'],
  compiler: {
    styledComponents: true,
    reactRemoveProperties: true,
    },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
