import { Box } from "@mui/material";
import HomePage from "@/features/Home";

export const metadata = {
  title: "AI Face Shape Detector | Free Face Shape Analyzer",
  description: "Find your perfect face shape with our free AI Face Shape Detector. Fast, accurate analysis to improve your style, makeup, and hairstyle decisions",
  keywords: "Face Shape Detector",
  metadataBase: new URL("https://faceswaponline.ai"),
  alternates: {
    canonical: "https://faceswaponline.ai",
    languages: {
      en: "/",
      es: "/es",
      ru: "/ru",
      pt: "/pt",
      id: "/id",
      de: "/de"
    }
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "AI Face Shape Detector | Free Face Shape Analyzer",
    description: "Find your perfect face shape with our free AI Face Shape Detector. Fast, accurate analysis to improve your style, makeup, and hairstyle decisions",
    url: "https://faceswaponline.ai",
    siteName: "FaceSwap",
    images: [
      {
        url: "/og-image.jpg",
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
    description: "Find your perfect face shape with our free AI Face Shape Detector. Fast, accurate analysis to improve your style, makeup, and hairstyle decisions",
    images: [
      {
        url: "/og-image.webp",
        alt: "Face Shape Detector",
      },
    ],
  },
};

export default function Home() {
  return (
    <Box>
      <HomePage locale="en" />
    </Box>
  );
}
