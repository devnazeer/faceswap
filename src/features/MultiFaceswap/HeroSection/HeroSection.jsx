import HeroSec from "@/Components/HeroSec/HeroSec";
import { Box } from "@mui/material";
import React from "react";

function HeroSection() {
  return (
    <>
      <Box>
        <HeroSec
          title="Multiple Face Swap AI - Online Free for Group Photos"
          para="Using Multiple Face Swap AI, effortlessly transform group photos by swapping faces for fun and unique results. Ideal for capturing memorable moments with friends or family in a creative way."
          src="/multiface/hero.jpg"
        />
      </Box>
    </>
  );
}

export default HeroSection;
