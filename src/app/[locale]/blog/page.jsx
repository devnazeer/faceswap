import BlogPosts from "@/Components/BlogPosts";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = params;

  return {
    alternates: {
      canonical: `https://faceswaponline.ai/${locale}/blog`,
    },
  };
}

export const generateStaticParams = async () => {
  const locales = ["en", "de", "es", "ru", "pt", "id"];
  return locales.map((locale) => ({ locale }));
};

export default async function Blog(props) {
  const { locale } = await props.params;

  return <BlogPosts locale={locale} />;
}
