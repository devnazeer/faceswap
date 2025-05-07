"use client";
import CustomAccordion from "@/Components/CustomAccordian/CustomAccordian";
import { FaqFs } from "@/Constants/FaqsData";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function FaqSection() {
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
            FAQS
          </Typography>
          <CustomAccordion FaqsData={FaqFs} />
        </Container>
      </Box>
    </>
  );
}

export default FaqSection;
