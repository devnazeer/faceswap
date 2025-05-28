import { Box } from "@mui/material";
import {
  getLocalizedDescription,
  getLocalizedImageAlt,
  getLocalizedKeywords,
  getLocalizedTitle,
} from "@/lib/localization";
import MultiFaceswapPage from "@/features/MultiFaceswap";

const VALID_LOCALES = ["en", "es", "ru", "pt", "id", "de"];

export async function generateStaticParams() {
  return VALID_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale = "en" } = params;

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://faceswaponline.ai";

  const title = getLocalizedTitle(locale);
  const description = getLocalizedDescription(locale);
  const keywords = getLocalizedKeywords(locale);
  const imageAlt = getLocalizedImageAlt(locale);

  const url =
    locale === "en"
      ? `${baseUrl}/multi-faceswap`
      : `${baseUrl}/${locale}/multi-faceswap`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: VALID_LOCALES.reduce(
        (acc, lang) => ({
          ...acc,
          [lang]: lang === "en" ? "/multi-faceswap" : `/${lang}/multi-faceswap`,
        }),
        {}
      ),
    },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "FaceSwap",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
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
          url: `${baseUrl}/og-image.webp`,
          alt: imageAlt,
        },
      ],
    },
  };
}

export default function MultiFaceSwapPage({ params }) {
  const { locale = "en" } = params;
  return (
    <Box>
      <MultiFaceswapPage locale={locale} />
    </Box>
  );
}
