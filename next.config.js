const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

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

// `next dev` gets its own folder so a `next build` can't wipe its files mid-session.
module.exports = (phase) => ({
  ...nextConfig,
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
});
