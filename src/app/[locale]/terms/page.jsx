import TermsPage from "@/features/Terms";
import React from "react";

export async function generateStaticParams() {
  const locales = ["en", "de", "es", "ru", "pt", "id"];
  return locales.map((locale) => ({ locale }));
}

const Terms = ({ params }) => {
  return <TermsPage locale={params.locale} />;
};

export default Terms;
