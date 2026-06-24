/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Images are local/inline SVG for v1, so no remote patterns are needed yet.
  // Add remotePatterns here when external image hosts are introduced.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
