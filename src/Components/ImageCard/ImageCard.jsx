import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function ImageCard({ src, title, description, isDate, date, onClick }) {
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          width: "100%",
          background: !isDate ? "#000" : "transparent",
          minHeight: !isDate ? "609px" : "auto",
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
          overflow: "hidden",
          "& img:hover": {
            transform: "scale(1.1)",
            cursor: "pointer",
          },
        }}
      >
        {src ? (
          <Box
            sx={{
              overflow: "hidden",
            }}
          >
            <Image
              src={src}
              width={600}
              height={384}
              style={{
                objectFit: "cover",
                aspectRatio: "600 / 384",
                maxWidth: "100%",
                height: "auto",
                transition: "all 0.1s linear",
              }}
              alt="Swiper Img"
              priority
            />
          </Box>
        ) : null}
        <Box
          sx={{
            boxSizing: "border-box",
            padding: "16px",
            width: "100%",
            height: "calc(100% - 384px) !important",
          }}
        >
          <Typography variant="h3" component="h3" mb={"8px"}>
            {title}
          </Typography>
          <Typography
            variant="p"
            component="p"
            mb={"0px"}
            sx={{
              color: "#9ca3af",
              fontSize: !isDate ? "16px" : "14px",
            }}
          >
            {description}
          </Typography>
          {isDate && (
            <Box pt={"8px"}>
              <Typography
                variant="span"
                component="span"
                sx={{ fontSize: "12px", color: "#6b7280", m: 0 }}
              >
                {date}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default ImageCard;
