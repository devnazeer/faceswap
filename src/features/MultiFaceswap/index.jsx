import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import WhyUseFS from "./WhyUseFS";
import SwiperSection from "./SwiperSection";
import HowUseFS from "./HowUseFS";
import EditingSection from "./EditingSection";
import ReviewSection from "./ReviewSection";
import FaqSection from "./FaqSection";
import { getTranslations } from "@/utils/i18n";

export default async function MultiFaceswap({ locale }) {
  const t = await getTranslations(locale, "common");
  return (
    <>
      <Box sx={{ background: "#fff", minHeight: "calc(100vh - 68.5px)" }}>
        <HeroSection t={t} />
        <WhyUseFS t={t} />
        <SwiperSection t={t} />
        <HowUseFS t={t} />
        <EditingSection t={t} />
        <ReviewSection t={t} />
        <FaqSection t={t} />
      </Box>
    </>
  );
}
