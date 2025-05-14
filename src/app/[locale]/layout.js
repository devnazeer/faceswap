import "../globals.css";
import { Roboto } from "next/font/google";
import ClientLayoutWrapper from "@/Components/ClientLayoutWrapper/ClientLayoutWrapper";
import {
  getLocalizedDescription,
  getLocalizedImageAlt,
  getLocalizedKeywords,
  getLocalizedTitle,
} from "@/lib/localization";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

// Server-side metadata generation
export async function generateMetadata({ params }) {
  const { locale } = params;

  const title = getLocalizedTitle(locale);
  const description = getLocalizedDescription(locale);
  const keywords = getLocalizedKeywords(locale);
  const imageAlt = getLocalizedImageAlt(locale);

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
      url: `https://your-domain.com/${locale}`,
      images: [
        {
          url: "https://your-domain.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: "https://your-domain.com/og-image.jpg",
          alt: imageAlt,
        },
      ],
    },
    alternates: {
      canonical: `https://your-domain.com/${locale}`,
    },
  };
}

// Root layout for each locale
export default function LocaleLayout({ children, params }) {
  const { locale } = params;

  return (
    <>
      <ClientLayoutWrapper locale={locale}>{children}</ClientLayoutWrapper>
    </>
  );
}
