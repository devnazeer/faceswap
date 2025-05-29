import TermsPage from "@/features/Terms";
import { getTranslations } from "@/utils/i18n";
import { Box } from "@mui/material";
import React from "react";
export const metadata = {
  title: "AI Face Shape Detector | Free Face Shape Analyzer",
  description:
    "Find your perfect face shape with our free AI Face Shape Detector. Fast, accurate analysis to improve your style, makeup, and hairstyle decisions",
  keywords: "Face Shape Detector",
  metadataBase: new URL("https://faceswaponline.ai/terms"),
  alternates: {
    canonical: "https://faceswaponline.ai/terms",
    languages: {
      en: "/",
      es: "/es",
      ru: "/ru",
      pt: "/pt",
      id: "/id",
      de: "/de",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "AI Face Shape Detector | Free Face Shape Analyzer",
    description:
      "Find your perfect face shape with our free AI Face Shape Detector. Fast, accurate analysis to improve your style, makeup, and hairstyle decisions",
    url: "https://faceswaponline.ai/terms",
    siteName: "FaceSwap",
    images: [
      {
        url: "https://faceswaponline.ai/terms/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Face Shape Detector",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Face Shape Detector | Free Face Shape Analyzer",
    description:
      "Find your perfect face shape with our free AI Face Shape Detector. Fast, accurate analysis to improve your style, makeup, and hairstyle decisions",
    images: [
      {
        url: "https://faceswaponline.ai/terms/og-image.webp",
        alt: "Face Shape Detector",
      },
    ],
  },
};
const Terms = async ({ params }) => {
  const locale = params?.locale || "en";
  const t = await getTranslations(locale, "common");
  return (
    <Box>
      <TermsPage locale="en" t={t} />
    </Box>
  );
};

export default Terms;
