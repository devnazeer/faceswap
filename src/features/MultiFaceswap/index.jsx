import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import WhyUseFS from "./WhyUseFS/WhyUseFS";
import SwiperSection from "./SwiperSection/SwiperSection";
import HowUseFS from "./HowUseFS/HowUseFS";
import EditingSection from "./EditingSection/EditingSection";
import ReviewSection from "./ReviewSection/ReviewSection";
import FaqSection from "./FaqSection/FaqSection";

function MultiFaceswapPage() {
  return (
    <>
      <Box sx={{ background: "#fff" }}>
        <HeroSection />
        <WhyUseFS />
        <SwiperSection />
        <HowUseFS />
        <EditingSection />
        <ReviewSection />
        <FaqSection />
      </Box>
    </>
  );
}

export default MultiFaceswapPage;
