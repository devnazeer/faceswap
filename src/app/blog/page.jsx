import BlogPosts from "@/Components/BlogPosts";

export const metadata = {
  title: "AI Face Shape Detector | Free Face Shape Analyzer",
  description:
    "Find your perfect face shape with our free AI Face Shape Detector. Fast, accurate analysis to improve your style, makeup, and hairstyle decisions",
  keywords: "Face Shape Detector",
  metadataBase: new URL("https://faceswaponline.ai"),
  alternates: {
    canonical: "https://faceswaponline.ai/blog",
    languages: {
      en: "/blog",
      es: "/es/blog",
      ru: "/ru/blog",
      pt: "/pt/blog",
      id: "/id/blog",
      de: "/de/blog",
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
    url: "https://faceswaponline.ai/blog",
    siteName: "FaceSwap",
    images: [
      {
        url: "https://faceswaponline.ai/blog/og-image.jpg",
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
        url: "https://faceswaponline.ai/blogs/og-image.webp",
        alt: "Face Shape Detector",
      },
    ],
  },
};

// Default English blog page
export default function BlogPage() {
  return <BlogPosts key="en" locale="en" />;
}
