import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function HeroSec({ title, para, src, isHome }) {
  return (
    <>
      <Box
        component="section"
        sx={{
          width: "100%",
          backgroundImage:
            "linear-gradient(to bottom right, #111827, #000000, #1f2937cc)",
          py: "64px",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={"32px"}
            direction={{ xs: "column-reverse", md: "row" }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              {isHome && (
                <Typography variant="h1" component="h1">
                  {title}
                </Typography>
              )}
              {!isHome && (
                <Typography variant="h2" component="h2">
                  {title}
                </Typography>
              )}
              <Typography variant="p" component="p" sx={{ fontSize: 24 }}>
                {para}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Image
                src={src}
                width={800}
                height={800}
                style={{
                  maxWidth: "100%",
                  width: "800px",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "center",
                  boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  borderRadius: "8px",
                }}
                alt="Image"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default HeroSec;
