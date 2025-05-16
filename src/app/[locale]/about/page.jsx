import AboutPage from "@/features/About";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = params;

  return {
    alternates: {
      canonical: `https://faceswaponline.ai/${locale}/about`,
    },
  };
}

export async function generateStaticParams() {
  const locales = ["en", "de", "es", "ru", "pt", "id"];
  return locales.map((locale) => ({ locale }));
}

const About = async (props) => {
  const { locale } = await props.params;

  return <AboutPage locale={locale} />;
};

export default About;
