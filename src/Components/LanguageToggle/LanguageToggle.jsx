"use client";
// import { useLanguage } from "../LanguageProvider/LanguageProvider";
import { useLanguage } from "../LanguageProvider/LanguageProvider";
import { Box, ClickAwayListener } from "@mui/material";
import { useState } from "react";
import Icon from "../Icon/Icon";

const LANGUAGES = [
  { code: "EN", lang: "en" },
  { code: "DE", lang: "de" },
  { code: "RU", lang: "ru" },
  { code: "PT", lang: "pt" },
  { code: "ES", lang: "es" },
  { code: "ID", lang: "id" },
];

function LanguageToggle({ isBottom }) {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  // Find the current language object
  const selectedLang =
    LANGUAGES.find((lang) => lang.lang === currentLanguage) || LANGUAGES[0];

  const handleToggle = () => setOpen((prev) => !prev);

  const handleSelect = async (langCode) => {
    try {
      await changeLanguage(langCode);
      setOpen(false);
    } catch (error) {
      console.error("Language change failed:", error);
    }
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
        {/* Toggle Button */}
        <Box
          onClick={handleToggle}
          sx={{
            px: "12px",
            py: "5px",
            color: "#9ca3af",
            fontSize: "16px",
            fontFamily: "roboto",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
                key={lang.lang} // Using lang code as key since it's unique
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
