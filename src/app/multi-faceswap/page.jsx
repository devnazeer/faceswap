import MultiFaceswap from "@/features/MultiFaceswap";
import { Box } from "@mui/material";

export const metadata = {
  title: "AI Face Shape Detector | Free Face Shape Analyzer",
  description:
    "Find your perfect face shape with our free AI Face Shape Detector. Fast, accurate analysis to improve your style, makeup, and hairstyle decisions",
  keywords: "Face Shape Detector",
  metadataBase: new URL("https://faceswaponline.ai/multi-faceswap"),
  alternates: {
    canonical: "https://faceswaponline.ai/multi-faceswap",
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
    url: "https://faceswaponline.ai/multi-faceswap",
    siteName: "FaceSwap",
    images: [
      {
        url: "https://faceswaponline.ai/multi-faceswap/og-image.jpg",
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
        url: "https://faceswaponline.ai/multi-faceswap/og-image.webp",
        alt: "Face Shape Detector",
      },
    ],
  },
};

export default function MultiFaceSwapPage() {
  return (
    <>
      <Box>
        <MultiFaceswap locale="en" />
      </Box>
    </>
  );
}
