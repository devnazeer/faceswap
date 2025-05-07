import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Container, Typography } from "@mui/material";
import HeroSection from "@/features/Home/HeroSection/HeroSection";
import HomePage from "@/features/Home";

export default function Home() {
  return (
    <Box sx={{ py: { xs: "4px", md: "8px" } }}>
      <HomePage />
    </Box>
  );
}
