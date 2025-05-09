// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   //   i18n,
//   //   experimental: {
//   //     appDir: true,
//   //   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
    localeDetection: true,
  },
};

export default nextConfig;
