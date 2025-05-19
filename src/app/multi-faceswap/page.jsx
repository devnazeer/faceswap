import MultiFaceswapPage from "@/features/MultiFaceswap";
import {
  getLocalizedDescription,
  getLocalizedImageAlt,
  getLocalizedKeywords,
  getLocalizedTitle,
} from "@/lib/localization";
import { Box } from "@mui/material";
import React from "react";

export async function generateStaticParams() {
  return ["en", "es", "ru", "pt", "id", "de"].map((locale) => ({ locale }));
}

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
      canonical: `https://faceswaponline.ai/multi-faceswap`,
    },
  };
}
function MultiFaceswap() {
  return (
    <>
      <Box>
        <MultiFaceswapPage locale={DEFAULT_LOCALE} />
      </Box>
    </>
  );
}

export default MultiFaceswap;
