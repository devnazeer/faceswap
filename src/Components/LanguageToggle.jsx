"use client";

import { useLanguage } from "./LanguageProvider";
import { Box, ClickAwayListener } from "@mui/material";
import { useState } from "react";
import Icon from "./Icon";
import { usePathname, useRouter } from "next/navigation"; // ✅ useRouter added

const LANGUAGES = [
  { code: "EN", lang: "en" },
  { code: "DE", lang: "de" },
  { code: "RU", lang: "ru" },
  { code: "PT", lang: "pt" },
  { code: "ES", lang: "es" },
  { code: "ID", lang: "id" },
];

function LanguageToggle({ isBottom }) {
  const pathname = usePathname();
  const router = useRouter();
  const { currentLanguage, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const activeLangFromUrl = pathname.split("/")[1];
  const selectedLang =
    LANGUAGES.find((lang) => lang.lang === activeLangFromUrl) || LANGUAGES[0];

  const handleToggle = () => setOpen((prev) => !prev);

  const handleSelect = async (langCode) => {
    try {
      changeLanguage(langCode);
      const pathWithoutLang = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");
      const newPath = `/${langCode}${pathWithoutLang || ""}`;

      router.push(newPath);
      setOpen(false);
    } catch (error) {
      console.error("Language change failed:", error);
    }
  };

  // const handleSelect = async (langCode) => {
  //   try {
  //     const pathParts = pathname.split("/").filter(Boolean); // removes empty parts
  //     const isBlogPage = pathParts[1] === "blog"; // [locale]/blog/[slug]

  //     if (isBlogPage) {
  //       const currentLocale = pathParts[0];
  //       const currentSlug = pathParts[2];

  //       // Fetch the current post using slug and current language
  //       const res = await fetch(
  //         `https://swapinfo.xyz/wp-json/wp/v2/posts?slug=${currentSlug}&lang=${currentLocale}`
  //       );
  //       const currentPost = await res.json();

  //       if (currentPost.length && currentPost[0].translations?.[langCode]) {
  //         const translatedPostId = currentPost[0].translations[langCode];

  //         // Fetch the translated post to get its slug
  //         const translatedRes = await fetch(
  //           `https://swapinfo.xyz/wp-json/wp/v2/posts/${translatedPostId}?lang=${langCode}`
  //         );
  //         const translatedPost = await translatedRes.json();

  //         const translatedSlug = translatedPost.slug;
  //         const newPath = `/${langCode}/blog/${translatedSlug}`;

  //         changeLanguage(langCode);
  //         router.push(newPath);
  //         setOpen(false);
  //         return;
  //       } else {
  //         console.warn("No translated version found for the current post.");
  //       }
  //     }

  //     // ✅ For non-blog pages — fallback to same path with new lang
  //     const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "");
  //     const newPath = `/${langCode}${pathWithoutLang}`;
  //     changeLanguage(langCode);
  //     router.push(newPath);
  //     setOpen(false);
  //   } catch (error) {
  //     console.error("Language change failed:", error);
  //   }
  // };

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
        {/* Toggle Button */}
        <Box
          onClick={handleToggle}
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

        {/* Dropdown */}
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
              overflow: "hidden",
              border: "1px solid rgb(66, 66, 87)",
            }}
          >
            {LANGUAGES.map((lang) => (
              <Box
                key={lang.lang}
                onClick={() => handleSelect(lang.lang)}
                sx={{
                  px: 1.5,
                  py: 0.5,
                  color: "#9ca3af",
                  fontSize: "16px",
                  fontFamily: "roboto",
                  textAlign: "center",
                  "&:hover": {
                    background: "#0891b2",
                    color: "#fff",
                  },
                }}
              >
                {lang.code}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
}

export default LanguageToggle;
