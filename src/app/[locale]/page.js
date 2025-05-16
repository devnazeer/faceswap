import { Box } from "@mui/material";
import HomePage from "@/features/Home";

export async function generateMetadata({ params }) {
  const { locale } = params;

  return {
    alternates: {
      canonical: `https://faceswaponline.ai/${locale ? locale : "en"}/`,
    },
  };
}

export async function generateStaticParams() {
  const locales = ["en", "de", "es", "ru", "pt", "id"];

  return locales.map((locale) => ({ locale }));
}

export default function Home({ params }) {
  return (
    <Box>
      <HomePage />
    </Box>
  );
}
