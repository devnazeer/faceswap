"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import HeroSection from "./HeroSection/HeroSection";
import UniqueSection from "./UniqueSection/UniqueSection";
import SwiperSection from "./SwiperSection/SwiperSection";
import UploadImageSection from "./UploadImageSection/UploadImageSection";
import EditingSection from "./EditingSection/EditingSection";
import ReviewSection from "./ReviewSection/ReviewSection";
import FaqSection from "./FaqSection/FaqSection";

function HomePage({ locale }) {
  const { i18n } = useTranslation("common");

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale).then(() => {});
    } else {
    }
  }, [locale, i18n]);
  return (
    <>
      <Box sx={{ background: "#1976d2" }}>
        <HeroSection />
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
