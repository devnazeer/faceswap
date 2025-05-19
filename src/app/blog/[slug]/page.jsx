import React from "react";
import BlogDetailPage from "@/features/BlogDetails";
export async function generateStaticParams() {
  const locales = ["en", "de", "es", "ru", "pt", "id"];
  const slugs = ["swap-face-photoshop", "how-to-use-insight-face-swap-discord"];

  const paths = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      paths.push({ locale, slug });
    }
  }

  return paths;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = params;

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://faceswaponline.ai";

  return {
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${slug}`,
    },
  };
}

export default async function BlogDetail({ params }) {
  const { locale, slug } = params;

  return <BlogDetailPage slug={slug} locale={locale} />;
}
