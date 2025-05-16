/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // ✅ disables Next.js image optimization for static export
  },
};

export default nextConfig;
