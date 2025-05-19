// import { Box } from "@mui/material";
// import HomePage from "@/features/Home";
// import {
//   getLocalizedTitle,
//   getLocalizedDescription,
//   getLocalizedKeywords,
//   getLocalizedImageAlt,
// } from "@/lib/localization"; // Adjust path if needed

// import { headers } from "next/headers"; // ✅ to get current path

// const DEFAULT_LOCALE = "en";

// export async function generateMetadata() {
//   const locale = DEFAULT_LOCALE;

//   const title = getLocalizedTitle(locale);
//   const description = getLocalizedDescription(locale);
//   const keywords = getLocalizedKeywords(locale);
//   const imageAlt = getLocalizedImageAlt(locale);

//   const baseUrl =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : "https://faceswaponline.ai";

//   // ✅ Get current path from headers
//   const headersList = headers();
//   const pathname = headersList.get("x-next-pathname") || "/";
//   const canonicalUrl = `${baseUrl}${pathname}`;

//   return {
//     title,
//     description,
//     keywords,
//     icons: {
//       icon: "/favicon.png",
//       shortcut: "/favicon.png",
//       apple: "/favicon.png",
//     },
//     openGraph: {
//       title,
//       description,
//       url: canonicalUrl,
//       images: [
//         {
//           url: `${baseUrl}/og-image.jpg`,
//           width: 1200,
//           height: 630,
//           alt: imageAlt,
//         },
//       ],
//       locale,
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [
//         {
//           url: `${baseUrl}/og-image.webp`,
//           alt: imageAlt,
//         },
//       ],
//     },
//     alternates: {
//       canonical: canonicalUrl,
//     },
//   };
// }

// export default function Home({ locale }) {
//   return (
//     <Box>
//       <HomePage locale={DEFAULT_LOCALE} />
//       {/* <HomePage /> */}
//     </Box>
//   );
// }

import { Box } from "@mui/material";
import HomePage from "@/features/Home";
import {
  getLocalizedTitle,
  getLocalizedDescription,
  getLocalizedKeywords,
  getLocalizedImageAlt,
} from "@/lib/localization";

const DEFAULT_LOCALE = "en";

export async function generateMetadata({ params }) {
  const { locale } = params;

  const title = getLocalizedTitle(DEFAULT_LOCALE);
  const description = getLocalizedDescription(DEFAULT_LOCALE);
  const keywords = getLocalizedKeywords(DEFAULT_LOCALE);
  const imageAlt = getLocalizedImageAlt(DEFAULT_LOCALE);

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://faceswaponline.ai";

  const canonicalUrl = `${baseUrl}/${locale}`;

  return {
    title,
    description,
    keywords,
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale: DEFAULT_LOCALE,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `${baseUrl}/og-image.webp`,
          alt: imageAlt,
        },
      ],
    },
    alternates: {
      canonical: `https://faceswaponline.ai`,
    },
  };
}

export default function Home() {
  return (
    <Box>
      <HomePage locale={DEFAULT_LOCALE} />
    </Box>
  );
}
