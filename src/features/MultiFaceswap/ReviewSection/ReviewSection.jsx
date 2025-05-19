"use client";
import ReviewCards from "@/Components/ReviewCards";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function ReviewSection() {
  const { t } = useTranslation("common");

  const items = t("reviewsmf.cards", { returnObjects: true });
  return (
    <>
      <Box
        component="section"
        sx={{
          py: "64px",
          background: "linear-gradient(to bottom right, #1f2937, #111827)",
          color: "#f3f4f6",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" align="center">
            {t("reviewsmf.heading")}
          </Typography>
          <Grid container spacing={"24px"}>
            {items.map((item, id) => (
              <Grid key={id} size={{ xs: 12, sm: 6 }}>
                <ReviewCards title={item.title} para={item.para} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ReviewSection;
