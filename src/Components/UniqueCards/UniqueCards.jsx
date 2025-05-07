import { Box, Typography } from "@mui/material";
import React from "react";

function UniqueCards({ title, para, isCard }) {
  return (
    <>
      <Box
        className="uniqueCard"
        sx={{
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
          padding: isCard ? "24px" : "12px",
          border: isCard ? "1px solid #1f2937" : "",
          background: isCard ? "#000" : "transparent",
          borderRadius: "8px",
          transition: "all 0.3s linear",
        }}
      >
        <Typography variant="h5" component="h5" marginBottom={"16px"}>
          {title}
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ color: "#9ca3af", margin: 0 }}
        >
          {para}
        </Typography>
      </Box>
    </>
  );
}

export default UniqueCards;
