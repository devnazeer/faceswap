"use client";
import Card from "@/Components/Card/Card";
import UniqueCards from "@/Components/UniqueCards/UniqueCards";
import { EditingItemFS } from "@/Constants/WhyUse";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function EditingSection() {
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
          <Typography variant="h2" component="h2" textAlign={"center"}>
            All Online Photo & Video Editing Tools
          </Typography>
          <Grid container spacing={"24px"}>
            {EditingItemFS.map((item, id) => (
              <Grid key={id} size={{ xs: 12, sm: 6 }}>
                <Card
                  src={item?.src}
                  title={item.title}
                  description={item.para}
                  isBtn={true}
                  href={item.href}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default EditingSection;
