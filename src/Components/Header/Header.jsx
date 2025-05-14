"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Icon from "../Icon/Icon";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

function Header({ onClick }) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "16px",
        boxSizing: "border-box",
        backdropFilter: "blur(5px)",
        background: "#1f2937",
        // backgroundColor: "#0d223794",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Icon
          onClick={onClick}
          code="&#xe5d2;"
          aria_label="menu"
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
