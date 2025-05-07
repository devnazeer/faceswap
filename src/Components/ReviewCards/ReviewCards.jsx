import { Box, Typography } from "@mui/material";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function ReviewCards({ title, para }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "32px",
          backgroundColor: "#1f2937",
          cursor: "pointer",
          borderRadius: "1rem",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          borderLeft: "4px solid #6366f1",
          transition: "all 0.3s ease",
          boxSizing: "border-box",
          "&:hover": {
            boxShadow: "0 10px 15px rgba(0,0,0,0.3)",
            transform: "translateY(-4px)",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "8px",
          }}
        >
          <Typography
            variant="h5"
            component="h5"
            mb={"0px"}
            sx={{ color: "#818cf8" }}
          >
            {title}
          </Typography>
          <FormatQuoteIcon sx={{ color: "#818cf8", fontSize: "24px" }} />
        </Box>
        <Typography variant="p" component="p">
          {para}
        </Typography>
      </Box>
    </>
  );
}

export default ReviewCards;
