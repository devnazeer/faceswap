import { Box } from "@mui/material";
import HeroSection from "./HeroSection/HeroSection";
import UniqueSection from "./UniqueSection/UniqueSection";
import SwiperSection from "./SwiperSection/SwiperSection";
import UploadImageSection from "./UploadImageSection/UploadImageSection";
import EditingSection from "./EditingSection/EditingSection";
import ReviewSection from "./ReviewSection/ReviewSection";
import FaqSection from "./FaqSection/FaqSection";
import { getTranslations } from "@/utils/i18n"; // You need to implement this function

export default async function HomePage({ locale }) {
  const t = await getTranslations(locale, "common");

  return (
    <Box sx={{ background: "#1976d2", minHeight: "calc(100vh - 68.5px)" }}>
      <HeroSection t={t} />
      <UniqueSection t={t} />
      <SwiperSection t={t} />
      <UploadImageSection t={t} />
      <EditingSection t={t} />
      <ReviewSection t={t} />
      <FaqSection t={t} />
    </Box>
  );
}
