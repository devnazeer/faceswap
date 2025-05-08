"use client";
import { Box, ClickAwayListener } from "@mui/material";
import React, { useState } from "react";
import Icon from "../Icon/Icon";
import { i18n } from "next-i18next";

const LANGUAGES = [
  { code: "EN", id: 1 },
  { code: "DE", id: 2 },
  { code: "RU", id: 3 },
  { code: "PT", id: 4 },
  { code: "ES", id: 5 },
  { code: "ID", id: 6 },
];

function CustomLanguageToggle({ isBottom }) {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleSelect = (lng) => {
    setSelectedLang(lng);
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
        {/* Toggle Button */}
        <Box
          onClick={handleToggle}
          // onClick={() => i18n.changeLanguage(lng)}
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
            {LANGUAGES.map((lng) => (
              <Box
                key={lng.id}
                // onClick={() => handleSelect(lang)}
                onClick={() => i18n.changeLanguage(lng)}
                dis
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
                {lng.code}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
}

export default CustomLanguageToggle;
