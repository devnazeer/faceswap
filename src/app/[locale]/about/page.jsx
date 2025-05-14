import AboutPage from "@/features/About";
import React from "react";

export async function generateStaticParams() {
  const locales = ["en", "de", "es", "ru", "pt", "id"];
  return locales.map((locale) => ({ locale }));
}

const About = ({ params }) => {
  return <AboutPage locale={params.locale} />;
};

export default About;
