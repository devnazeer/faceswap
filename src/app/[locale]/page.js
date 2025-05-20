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
  return ["en", "es", "ru", "pt", "id", "de"].map((locale) => ({ locale }));
}

export default function Home({ params }) {
  return (
    <Box>
      <HomePage />
    </Box>
  );
}
