const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
// The site loads no third-party scripts, frames or fonts, and Stripe checkout is
// a redirect to a Stripe-hosted page, so a first-party-only policy fits.
// 'unsafe-inline' is needed for the inline scripts Next.js uses to hydrate.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), browsing-topics=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [],
    // AVIF first (smallest), WebP for browsers without it.
    formats: ["image/avif", "image/webp"],
    // Optimized images are cached for 30 days. Give a changed image a new
    // filename so visitors get it right away.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  // The doctors page was removed; send old links home.
  async redirects() {
    return [{ source: "/providers", destination: "/", permanent: true }];
  },
};

// `next dev` gets its own folder so a `next build` can't wipe its files mid-session.
module.exports = (phase) => ({
  ...nextConfig,
  ...(phase === PHASE_DEVELOPMENT_SERVER ? { headers: undefined } : {}),
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
});
