import BlogPosts from "@/Components/BlogPosts/BlogPosts";
import React from "react"; // renamed for clarity

export const generateStaticParams = async () => {
  const locales = ["en", "de", "es", "ru", "pt", "id"];
  return locales.map((locale) => ({ locale }));
};

export default function Blog({ params }) {
  return <BlogPosts locale={params.locale} />;
}
