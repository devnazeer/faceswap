"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ButtonLabel from "@/Components/ButtonLabel/ButtonLabel";
import Card from "@/Components/Card/Card";
import { SwiperItems } from "@/Constants/SwiperData";

function SwiperSection() {
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
          The Ultimate Face Swapper For Everyone
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6 }}>
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
              {SwiperItems.slice(0, 1).map((item, id) => (
                <Card
                  key={id}
                  src={item.src}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                // justifyContent: "center",
              }}
            >
              {SwiperItems.slice(1, 3).map((item, id) => (
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
