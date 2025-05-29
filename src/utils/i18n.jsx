// utils/i18n.js or utils/i18n.ts
import { promises as fs } from "fs";
import path from "path";

export async function getTranslations(locale, namespace = "common") {
  const filePath = path.join(
    process.cwd(),
    "public",
    "locales",
    locale,
    `${namespace}.json`
  );
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}
