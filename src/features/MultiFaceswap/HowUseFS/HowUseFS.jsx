"use client";
import UniqueCards from "@/Components/UniqueCards/UniqueCards";
import { HowUSeItems } from "@/Constants/WhyUse";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function HowUseFS() {
  return (
    <>
      <Box
        component="section"
        sx={{
          py: "64px",
          background: "linear-gradient(to bottom right, #000000, #1f2937)",
          borderTop: "1px solid #374151",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2">
            How to use Multi Face Swap?
          </Typography>
          <Grid container spacing={"24px"}>
            {HowUSeItems.map((item, id) => (
              <Grid key={id} size={{ xs: 12, sm: 6, md: 4 }}>
                <UniqueCards
                  title={item.title}
                  para={item.para}
                  isCard={true}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default HowUseFS;
