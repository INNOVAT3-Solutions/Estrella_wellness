/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  // The doctors page was removed; send old links home.
  async redirects() {
    return [{ source: "/providers", destination: "/", permanent: true }];
  },
};

module.exports = nextConfig;
