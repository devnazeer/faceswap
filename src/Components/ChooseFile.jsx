"use client";
import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import Icon from "./Icon";
import Image from "next/image";

export default function ChooseFile({
  para,
  code,
  label,
  name,
  onChange,
  preview,
}) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && onChange) {
      onChange(event); // Pass event up to parent
    }
  };

  return (
    <Box
      sx={{
        width: "146px",
        height: "146px",
        maxWidth: "100%",
        border: preview ? "none" : "3px dashed #1976d2",
        p: preview ? 0 : "24px",
        background: "#1a1a1a",
        boxSizing: "border-box",
        cursor: "pointer",
        borderRadius: "15px",
        overflow: "hidden",
      }}
      onClick={handleClick}
    >
      {preview ? (
        <Box
          className="flex"
          sx={{
            height: "100%",
          }}
        >
          <Image
            src={preview}
            width={150}
            height={150}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              borderRadius: "8px",
            }}
            alt="Preview"
          />
        </Box>
      ) : (
        <Box
          className="flex"
          sx={{
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          <Icon
            code={code}
            label={label}
            sx={{
              color: "#fff9",
              fontSize: "24px !important",
              mb: "8px",
            }}
          />
          <Typography
            textAlign="center"
            sx={{ color: "#fff9", mb: 1, fontSize: "14px" }}
          >
            {para}
          </Typography>
        </Box>
      )}
      <input
        type="file"
        name={name}
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </Box>
  );
}
