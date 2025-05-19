"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Card from "@/Components/Card";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

function SwiperSection() {
  const { t } = useTranslation("common");
  const cards = t("swiperSection.cards", { returnObjects: true });
  return (
    <Box
      component="section"
      sx={{
        background: "linear-gradient(to right, #1f2937, #374151)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center">
          {t("swiperSection.heading")}
        </Typography>
        <Grid container spacing={4} justifyContent={"center"}>
          <Grid size={{ xs: 12, sm: 6, md: 5, lg: 6 }}>
            <Box
              sx={{
                position: "sticky !important",
                top: "69px",
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "center" },
              }}
            >
              {cards.slice(0, 1).map((item, id) => (
                <Card
                  key={id}
                  src={item.src}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 5, lg: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {cards.slice(1, 3).map((item, id) => (
                <Card
                  key={id}
                  src={item.src}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SwiperSection;
