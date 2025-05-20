import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { fileURLToPath } from "url";

// Define __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locales = ["en", "de", "ru", "pt", "es", "id"];
const baseUrl = "https://faceswaponline.ai";

async function generateSitemap() {
  const urls = [];

  // Static pages
  const staticPaths = [
    "",
    "/about",
    "/terms",
    "/privacy",
    "/multi-faceswap",
    "/blog",
  ];

  for (const path of staticPaths) {
    const alternates = locales
      .map(
        (locale) =>
          `<xhtml:link rel="alternate" hreflang="${locale}" href="${baseUrl}/${locale}${path}" />`
      )
      .join("\n    ");

    urls.push(`
  <url>
    <loc>${baseUrl}/en${path}</loc>
    ${alternates}
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  }

  // Blog posts from external API
  for (const locale of locales) {
    try {
      const res = await fetch(
        `https://swapinfo.xyz/wp-json/wp/v2/posts?lang=${locale}&_embed`
      );
      const posts = await res.json();

      if (!Array.isArray(posts)) {
        console.warn(`⚠️ Unexpected response for locale "${locale}"`);
        continue;
      }

      posts.forEach((post) => {
        const slug = post.slug;

        const alternates = locales
          .map(
            (lang) =>
              `<xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}/${lang}/blog/${slug}" />`
          )
          .join("\n    ");

        urls.push(`
  <url>
    <loc>${baseUrl}/${locale}/blog/${slug}</loc>
    ${alternates}
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
      });
    } catch (error) {
      console.error(
        `❌ Failed to fetch posts for locale "${locale}":`,
        error.message
      );
    }
  }

  // Final XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;

  // Write to /public/sitemap.xml
  const outputPath = path.join(__dirname, "..", "public", "sitemap.xml");
  fs.writeFileSync(outputPath, sitemapXml, "utf8");
  console.log("✅ Sitemap with hreflang generated at", outputPath);
}

// Run it
generateSitemap();
