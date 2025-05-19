import BlogPosts from "@/Components/BlogPosts";
import React from "react";

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
      canonical: `https://faceswaponline.ai/blog`,
    },
  };
}

export const generateStaticParams = async () => {
  const locales = ["en", "de", "es", "ru", "pt", "id"];
  return locales.map((locale) => ({ locale }));
};

export default async function Blog(props) {
  const { locale } = await props.params;

  return <BlogPosts locale={DEFAULT_LOCALE} />;
}
