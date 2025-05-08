import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ChooseFileSection from "./ChooseFileSection/ChooseFileSection";
import UniqueSection from "./UniqueSection/UniqueSection";
import SwiperSection from "./SwiperSection/SwiperSection";
import UploadImageSection from "./UploadImageSection/UploadImageSection";
import EditingSection from "./EditingSection/EditingSection";
import ReviewSection from "./ReviewSection/ReviewSection";
import FaqSection from "./FaqSection/FaqSection";

function HomePage() {
  return (
    <>
      <Box sx={{ background: "#0891b2" }}>
        <HeroSection />
        {/* <ChooseFileSection /> */}
        <UniqueSection />
        <SwiperSection />
        <UploadImageSection />
        <EditingSection />
        <ReviewSection />
        <FaqSection />
      </Box>
    </>
  );
}

export default HomePage;
