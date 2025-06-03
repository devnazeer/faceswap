"use client";
import UniqueCards from "@/Components/UniqueCards";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const UploadImageSection = () => {
  const { t } = useTranslation("common");

  const items = t("UploadImageSection.cards", { returnObjects: true });
  return (
    <>
      <Box
        component="section"
        sx={{
          py: "64px",
          background: "linear-gradient(to bottom right, #000000, #1f2937)", // black to gray-800
          borderTop: "1px solid #374151",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" textAlign={"center"}>
            {t("UploadImageSection.heading")}
          </Typography>
          <Grid container spacing={"24px"}>
            {items.map((item, id) => (
              <Grid key={id} size={{ xs: 12, sm: 6, md: 4 }}>
                <UniqueCards
                  title2={item.title}
                  para2={item.para}
                  isIcon={true}
                  code={item.code}
                  label={item.label}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default UploadImageSection;
