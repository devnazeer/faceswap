"use client";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import HeroSection from "./HeroSection/HeroSection";
import WhyUseFS from "./WhyUseFS/WhyUseFS";
import SwiperSection from "./SwiperSection/SwiperSection";
import HowUseFS from "./HowUseFS/HowUseFS";
import EditingSection from "./EditingSection/EditingSection";
import ReviewSection from "./ReviewSection/ReviewSection";
import FaqSection from "./FaqSection/FaqSection";

function MultiFaceswapPage({ locale }) {
  const { i18n } = useTranslation("common");

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale).then(() => {});
    } else {
    }
  }, [locale, i18n]);
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
