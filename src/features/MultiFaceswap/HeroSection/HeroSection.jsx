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
          uploadPara1={"Upload Face"}
          uploadPara2={"Base Image"}
          code1="&#xe7fe;"
          label1={"person_add"}
          code2="&#xe439;"
          label2={"add_a_photo"}
          codeBtn="&#xe86a;"
          labelBtn={"cached"}
          btnText={"Swap Face"}
          note={"Unlock More Face Swap Templates or DIY Swap in the App"}
        />
      </Box>
    </>
  );
}

export default HeroSection;
