// // "use client";
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

import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {};
}

export default function Home() {
  // redirect to your default locale
  redirect("/en");
}
