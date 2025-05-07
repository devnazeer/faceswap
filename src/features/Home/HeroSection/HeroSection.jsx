import HeroSec from "@/Components/HeroSec/HeroSec";
import { Box } from "@mui/material";
import React from "react";

function HeroSection() {
  return (
    <>
      <Box>
        <HeroSec
          title="Free AI Face Swap - Best Face Swapper Online"
          para="Explore the fun of AI Face Swap with our free Face Swapper. Swap
                faces instantly with friends, celebrities, or anyone! AI makes
                it easy and fun to create unique, shareable face swaps in
                seconds."
          src="/home/1.webp"
          isHome={true}
        />
      </Box>
    </>
  );
}

export default HeroSection;
