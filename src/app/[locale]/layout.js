import "../globals.css";
import { Roboto } from "next/font/google";
import { LanguageProvider } from "@/Components/LanguageProvider";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

// Load Google Font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const VALID_LOCALES = ["en", "es", "ru", "pt", "id", "de"];

export async function generateStaticParams() {
  return VALID_LOCALES.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  return (
    <div className={roboto.variable}>
      <LanguageProvider>
        <main>{children}</main>
      </LanguageProvider>
    </div>
  );
}
