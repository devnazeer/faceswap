"use client";
import React, { useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Icon from "../Icon/Icon";
import Image from "next/image";
import ButtonLabel from "../ButtonLabel/ButtonLabel";

export default function ChooseFile({ para, code, label }) {
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
          width: "146px",
          maxWidth: "100%",
          height: preview ? "146px" : "146px",
          border: preview ? "none" : "3px dashed #0891b2",
          p: preview ? "0" : "24px",
          background: "#1a1a1a",
          boxSizing: "border-box",
          cursor: "pointer",
          borderRadius: "15px",
          overflow: "hidden",
          // py: "32px",
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
                width: "100%",
                height: "100%",
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
              variant="p"
              component="p"
              textAlign="center"
              sx={{ color: "#fff9", mb: 1, fontSize: "14px" }}
            >
              {para}
            </Typography>
            {/* <ButtonLabel btnText={btnText} sx={{ background: "#1f2937" }} /> */}
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
