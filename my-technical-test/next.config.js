/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO: "mongodb+srv://vercel-admin-user:foOzMOCq1MWHgcO8@cluster0.mcyiuhz.mongodb.net/?retryWrites=true&w=majority",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
