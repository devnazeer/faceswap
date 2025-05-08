import UniqueCards from "@/Components/UniqueCards/UniqueCards";
import { uniqueItem } from "@/Constants/UniqueData";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function UniqueSection() {
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
          <Typography variant="h2" component="h2" textAlign={"center"}>
            What Makes AI Face Swapper Unique?
          </Typography>
          <Grid container spacing={"24px"}>
            {uniqueItem.map((item, id) => (
              <Grid key={id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
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

export default UniqueSection;
