// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   trailingSlash: true,
//   images: {
//     unoptimized: true, // ✅ disables Next.js image optimization for static export
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"], // Modern formats
    minimumCacheTTL: 86400, // 1 day cache
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledComponents: true,
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.optimization, {
        minimize: true,
        splitChunks: {
          chunks: "all",
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      });
    }
    return config;
  },
};

export default nextConfig;
