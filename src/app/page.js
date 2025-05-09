// import Image from "next/image";
// import styles from "./page.module.css";
// import { Box, Button, Container, Typography } from "@mui/material";
// import HeroSection from "@/features/Home/HeroSection/HeroSection";
// import HomePage from "@/features/Home";

// export default function Home() {
//   return (
//     <Box>
//       <HomePage />
//     </Box>
//   );
// }

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Container, Typography } from "@mui/material";
import HeroSection from "@/features/Home/HeroSection/HeroSection";
import HomePage from "@/features/Home";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation("common");
  return (
    <Box>
      <HomePage />
    </Box>
  );
}
