/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URI: "mongodb+srv://bardev33:7eSwqd3vWY7zw@cluster0.mcyiuhz.mongodb.net/?retryWrites=true&w=majority",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
