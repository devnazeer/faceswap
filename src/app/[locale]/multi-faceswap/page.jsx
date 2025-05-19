import MultiFaceswapPage from "@/features/MultiFaceswap";
import { Box } from "@mui/material";
import React from "react";

export async function generateStaticParams() {
  return ["en", "es", "ru", "pt", "id", "de"].map((locale) => ({ locale }));
}
export async function generateMetadata({ params }) {
  const { locale } = params;

  return {
    alternates: {
      canonical: `https://faceswaponline.ai/${locale}/multi-faceswap`,
    },
  };
}
function MultiFaceswap() {
  return (
    <>
      <Box>
        <MultiFaceswapPage />
      </Box>
    </>
  );
}

export default MultiFaceswap;
