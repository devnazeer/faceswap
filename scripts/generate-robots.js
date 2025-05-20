import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locales = ["en", "de", "ru", "pt", "es", "id"];
const baseUrl = "https://faceswaponline.ai";

const content = `
User-agent: *
Disallow: /api/
Disallow: /admin/
Allow: /

${locales
  .map(
    (locale) =>
      `Sitemap: ${baseUrl}/${locale === "en" ? "" : locale + "/"}sitemap.xml`
  )
  .join("\n")}
`.trim();

const outputPath = path.join(__dirname, "..", "public", "robots.txt");

fs.writeFileSync(outputPath, content, "utf8");
console.log("✅ robots.txt generated at", outputPath);
