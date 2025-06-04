import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import UniqueSection from "./UniqueSection";
import SwiperSection from "./SwiperSection";
import UploadImageSection from "./UploadImageSection";
import EditingSection from "./EditingSection";
import ReviewSection from "./ReviewSection";
import FaqSection from "./FaqSection";
import { getTranslations } from "@/utils/i18n";

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
