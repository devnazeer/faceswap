import MultiFaceswapPage from "@/features/MultiFaceswap";
import { Box } from "@mui/material";
import React from "react";

function MultiFaceswap() {
  return (
    <>
      <Box sx={{ py: { xs: "4px", md: "8px" } }}>
        <MultiFaceswapPage />
      </Box>
    </>
  );
}

export default MultiFaceswap;
