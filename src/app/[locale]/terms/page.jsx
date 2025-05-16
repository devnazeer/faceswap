import TermsPage from "@/features/Terms";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = params;

  return {
    alternates: {
      canonical: `https://faceswaponline.ai/${locale}/terms`,
    },
  };
}

export async function generateStaticParams() {
  const locales = ["en", "de", "es", "ru", "pt", "id"];
  return locales.map((locale) => ({ locale }));
}

const Terms = async (props) => {
  const { locale } = await props.params;

  return <TermsPage locale={locale} />;
};

export default Terms;
