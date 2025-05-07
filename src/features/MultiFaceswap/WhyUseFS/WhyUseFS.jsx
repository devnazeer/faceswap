import UniqueCards from "@/Components/UniqueCards/UniqueCards";
import { WhyItems } from "@/Constants/WhyUse";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function WhyUseFS() {
  return (
    <>
      <Box
        component="section"
        sx={{
          py: "64px",
          backgroundImage: "linear-gradient(to left, #111827, #000, #1f2937)",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2">
            Why Use Multiple Face Swap?
          </Typography>
          <Grid container spacing={"24px"}>
            {WhyItems.map((item, id) => (
              <Grid key={id} size={{ xs: 12, sm: 6, md: 3 }}>
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

export default WhyUseFS;
