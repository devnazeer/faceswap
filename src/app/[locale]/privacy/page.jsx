import PrivacyPage from "@/features/Privacy";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = params;

  return {
    alternates: {
      canonical: `https://faceswaponline.ai/${locale}/privacy`,
    },
  };
}

export async function generateStaticParams() {
  const locales = ["en", "de", "es", "ru", "pt", "id"];
  return locales.map((locale) => ({ locale }));
}

const Privacy = async (props) => {
  const { locale } = await props.params;

  return <PrivacyPage locale={locale} />;
};

export default Privacy;
