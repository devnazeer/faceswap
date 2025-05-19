"use client";
import CustomAccordion from "@/Components/CustomAccordian";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function FaqSection() {
  const { t } = useTranslation("common");

  const items = t("faqs.cards", { returnObjects: true });

  return (
    <>
      <Box
        component="section"
        sx={{
          py: "64px",
          background: "linear-gradient(to left, #111827, #000)",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" align="center">
            {t("faqs.heading")}
          </Typography>
          <CustomAccordion FaqsData={items} />
        </Container>
      </Box>
    </>
  );
}

export default FaqSection;
