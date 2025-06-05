"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Icon from "./Icon";
import LanguageToggle from "./LanguageToggle";

function Header({ onClick }) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "16px",
        boxSizing: "border-box",
        backdropFilter: "blur(5px)",
        background: "#1f2937",
      }}
    >
      <Box className="space-between">
        <Icon
          onClick={onClick}
          code="&#xe5d2;"
          // code="menu"
          aria-label="menu"
          sx={{
            fontSize: 24,
            color: "#fff",
            cursor: "pointer",
            transition: "all 0.2s linear",
          }}
        />
        <Box>
          <LanguageToggle isBottom={false} />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
