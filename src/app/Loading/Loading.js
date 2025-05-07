import { Box } from "@mui/material";
import React from "react";
import { BounceLoader } from "react-spinners";

function Loading() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #1f2937, #374151)",
        }}
      >
        <BounceLoader size={100} color="#818cf8" speedMultiplier={2} />
      </Box>
    </>
  );
}

export default Loading;
