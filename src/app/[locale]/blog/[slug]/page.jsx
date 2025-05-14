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

export default function BlogDetail({ params }) {
  return <BlogDetailPage slug={params.slug} locale={params.locale} />;
}
