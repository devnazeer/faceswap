import PrivacyPage from "@/features/Privacy";
import React from "react";

export async function generateStaticParams() {
  const locales = ["en", "de", "es", "ru", "pt", "id"];
  return locales.map((locale) => ({ locale }));
}

const Privacy = ({ params }) => {
  return <PrivacyPage locale={params.locale} />;
};

export default Privacy;
