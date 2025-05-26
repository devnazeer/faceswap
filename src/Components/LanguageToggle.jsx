"use client";

import { usePathname, useRouter } from "next/navigation";
import { Box, ClickAwayListener } from "@mui/material";
import { useState } from "react";
import Icon from "./Icon";
import { useLanguage } from "./LanguageProvider";

const LANGUAGES = [
  { code: "EN", lang: "en" },
  { code: "DE", lang: "de" },
  { code: "RU", lang: "ru" },
  { code: "PT", lang: "pt" },
  { code: "ES", lang: "es" },
  { code: "ID", lang: "id" },
];

const WP_API_BASE = "https://swapinfo.xyz/wp-json/wp/v2";

const SLUG_MAPPING = {
  en: {
    "celebrity-face-swap": {
      de: "promi-gesichtstausch",
      es: "intercambio-rostros-celebridades",
      ru: "%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D0%BE%D1%81%D1%82%D0%B8-%D0%B7%D0%B0%D0%BC%D0%B5%D0%BD%D0%B0-%D0%BB%D0%B8%D1%86",
      pt: "celebrity-face-swap",
      id: "celebrity-face-swap",
    },
    "swap-face-photoshop": {
      de: "gesichtstausch-photoshop",
      es: "intercambiar-cara-photoshop",
      ru: "%d0%bf%d0%be%d0%bc%d0%b5%d0%bd%d1%8f%d0%b9%d1%82%d0%b5%d1%81%d1%8c-%d0%bb%d0%b8%d1%86%d0%b0%d0%bc%d0%b8-%d0%b2-%d1%84%d0%be%d1%82%d0%be%d1%88%d0%be%d0%bf%d0%b5",
      pt: "swap-face-photoshop",
      id: "menukar-wajah-photoshop",
    },
    "how-to-use-insight-face-swap-discord": {
      de: "set-up-insight-face-swap",
      es: "configuracion-instalacion-intercambio-cara",
      ru: "%d0%bd%d0%b0%d1%81%d1%82%d1%80%d0%be%d0%b9%d0%ba%d0%b0-%d0%b7%d0%b0%d0%bc%d0%b5%d0%bd%d1%8b-%d0%bb%d0%b8%d1%86-%d0%b2-insight",
      pt: "how-to-use-insight-face-swap-discord",
      id: "mengatur-wawasan-wajah-swap",
    },
  },
};

function getLocalizedSlug(originalSlug, fromLocale, toLocale) {
  if (fromLocale === toLocale) return originalSlug;

  if (toLocale === "en") {
    for (const [enSlug, translations] of Object.entries(SLUG_MAPPING.en)) {
      const match = Object.entries(translations).some(
        ([locale, slug]) => locale === fromLocale && slug === originalSlug
      );
      if (match) return enSlug;
    }
    return originalSlug;
  }

  if (fromLocale === "en" && SLUG_MAPPING.en[originalSlug]?.[toLocale]) {
    return SLUG_MAPPING.en[originalSlug][toLocale];
  }

  let englishSlug;
  for (const [enSlug, translations] of Object.entries(SLUG_MAPPING.en)) {
    const match = Object.entries(translations).some(
      ([locale, slug]) => locale === fromLocale && slug === originalSlug
    );
    if (match) {
      englishSlug = enSlug;
      break;
    }
  }

  return SLUG_MAPPING.en[englishSlug]?.[toLocale] || originalSlug;
}

async function getTranslatedPost(currentSlug, currentLocale, targetLang) {
  try {
    // First try to get the translated slug from our mapping
    const translatedSlug = getLocalizedSlug(
      currentSlug,
      currentLocale,
      targetLang
    );

    // Verify if the translated post exists
    const verifyRes = await fetch(
      `${WP_API_BASE}/posts?slug=${translatedSlug}&lang=${targetLang}&_fields=id`
    );

    if (verifyRes.ok) {
      const verifyPosts = await verifyRes.json();
      if (verifyPosts.length > 0) {
        return { slug: translatedSlug, exists: true };
      }
    }

    // If no translated post found, fallback to English version
    const fallbackSlug = getLocalizedSlug(currentSlug, currentLocale, "en");
    const fallbackRes = await fetch(
      `${WP_API_BASE}/posts?slug=${fallbackSlug}&lang=en&_fields=id`
    );

    if (fallbackRes.ok) {
      const fallbackPosts = await fallbackRes.json();
      if (fallbackPosts.length > 0) {
        return { slug: fallbackSlug, exists: true };
      }
    }

    // If nothing found, return the original slug
    return { slug: currentSlug, exists: false };
  } catch (err) {
    console.error("Translation fetch error:", err);
    return { slug: currentSlug, exists: false };
  }
}

export default function LanguageToggle({ isBottom }) {
  const pathname = usePathname();
  const router = useRouter();
  const { currentLanguage, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const pathParts = pathname.split("/").filter(Boolean);
  const selectedLang =
    LANGUAGES.find((lang) => lang.lang === pathParts[0]) || LANGUAGES[0];

  const handleSelect = async (langCode) => {
    const blogIndex = pathParts.indexOf("blog");
    const isBlogDetailPage =
      blogIndex !== -1 && pathParts.length > blogIndex + 1;

    changeLanguage(langCode);

    if (isBlogDetailPage) {
      const currentLocale = LANGUAGES.some((l) => l.lang === pathParts[0])
        ? pathParts[0]
        : "en";
      const currentSlug = pathParts[pathParts.length - 1];

      try {
        const { slug: translatedSlug } = await getTranslatedPost(
          currentSlug,
          currentLocale,
          langCode
        );

        const newPath =
          langCode === "en"
            ? `/blog/${translatedSlug}`
            : `/${langCode}/blog/${translatedSlug}`;
        await router.push(newPath);
      } catch (error) {
        console.error("Failed to navigate to translated post:", error);
        // Fallback to home page or current page if translation fails
        const fallbackPath = langCode === "en" ? "/" : `/${langCode}`;
        await router.push(fallbackPath);
      }
    } else {
      const newPathParts = [...pathParts];
      if (LANGUAGES.some((l) => l.lang === newPathParts[0])) {
        newPathParts.shift();
      }
      const basePath = newPathParts.join("/") || "";
      const newPath =
        langCode === "en" ? `/${basePath}` : `/${langCode}/${basePath}`;
      await router.push(newPath || "/");
    }

    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box
        sx={{
          position: "relative",
          width: "70px",
          background: "#1f2937",
          borderRadius: "5px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <Box
          onClick={() => setOpen((prev) => !prev)}
          className="space-between"
          sx={{
            px: "12px",
            py: "5px",
            color: "#9ca3af",
            fontSize: "16px",
            fontFamily: "roboto",
            textAlign: "center",
            width: "65px",
            boxSizing: "border-box",
            gap: "2px",
          }}
        >
          <span>{selectedLang.code}</span>
          <Icon
            code="&#xe5c5;"
            label="arrow_drop_down"
            sx={{ textAlign: "end" }}
          />
        </Box>

        {open && (
          <Box
            sx={{
              position: "absolute",
              top: isBottom ? "auto" : "100%",
              bottom: isBottom ? "100%" : "auto",
              left: 0,
              right: 0,
              background: "#1f2937",
              borderRadius: "5px",
              mt: isBottom ? "0px" : "2px",
              mb: isBottom ? "2px" : "0px",
              zIndex: 10,
            }}
          >
            {LANGUAGES.map(({ code, lang }) => (
              <Box
                key={lang}
                onClick={() => handleSelect(lang)}
                sx={{
                  px: "12px",
                  py: "5px",
                  color: selectedLang.lang === lang ? "#fff" : "#9ca3af",
                  fontWeight: selectedLang.lang === lang ? "bold" : "normal",
                  "&:hover": { backgroundColor: "#374151" },
                }}
              >
                {code}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
}
