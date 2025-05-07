"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ButtonLabel from "@/Components/ButtonLabel/ButtonLabel";
import Card from "@/Components/Card/Card";
import { SwiperFS } from "@/Constants/SwiperData";

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
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "sticky !important",
                top: "69px",
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Best Use of Multi Face Swapper
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Need to showcase product details? Use AirBrush's AI image
                enhancer to effortlessly upscale images for edits or prints.
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  gap: 2,
                  mt: 2,
                }}
              >
                <ButtonLabel
                  btnText="Upload Image"
                  sx={{
                    background: "#0891b2 !important",
                    border: "1px solid transparent !important",
                    borderRadius: "30px !important",
                    padding: "10px 40px !important",
                    width: { xs: "100%", sm: "210px" },
                    "&:hover": {
                      background: "transparent !important",
                      border: "1px solid #0891b2 !important",
                    },
                  }}
                />
                <ButtonLabel
                  btnText="Download App"
                  sx={{
                    border: "1px solid #0891b2 !important",
                    background: "transparent !important",
                    borderRadius: "30px !important",
                    padding: "10px 40px !important",
                    width: { xs: "100%", sm: "210px" },
                    "&:hover": {
                      background: "#0891b2 !important",
                      border: "1px solid transparent !important",
                    },
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {SwiperFS.map((item, id) => (
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
