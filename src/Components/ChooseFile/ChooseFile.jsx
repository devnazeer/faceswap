"use client";
import React, { useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Icon from "../Icon/Icon";
import Image from "next/image";
import ButtonLabel from "../ButtonLabel/ButtonLabel";

export default function ChooseFile({ para, btnText }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: preview ? "310px" : "100%",
          border: "3px dashed #1f2937",
          padding: "24px",
          background: "#000",
          boxSizing: "border-box",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {preview ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={preview}
              width={800}
              height={256}
              style={{
                maxWidth: "100%",
                width: "800px",
                height: "256px",
                maxHeight: "300px",
                objectFit: "contain",
                objectPosition: "center",
                borderRadius: "8px",
              }}
              alt="Preview"
            />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Icon
              code="&#xf09b;"
              label="upload"
              sx={{
                color: "#4b5563",
                fontSize: "48px !important",
                mb: "12px",
              }}
            />
            <Typography
              variant="p"
              component="p"
              textAlign="center"
              sx={{ color: "#6b7280", mb: 1 }}
            >
              {para}
            </Typography>
            <ButtonLabel btnText={btnText} sx={{ background: "#1f2937" }} />
          </Box>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </Box>
    </>
  );
}
