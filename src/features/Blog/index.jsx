"use client";

import Grid from "@mui/material/Grid";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ImageCard from "@/components/ImageCard"; // Ensure this exists

export default function BlogHomePage({ locale, posts }) {
  const { t } = useTranslation("common");

  return (
    <Box
      sx={{
        background: "#111827",
        minHeight: "calc(100vh - 68.5px)",
        py: "40px",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ color: "white", mb: 3 }}>
          {t("blogCard.title")}
        </Typography>
        <Grid container spacing={3}>
          {posts?.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Link
                href={`${locale === "en" ? "" : "/" + locale}/blog/${
                  post.slug
                }`}
                style={{ textDecoration: "none" }}
              >
                <ImageCard
                  title={post.title}
                  description={post.description}
                  src={post.image}
                  date={post.date}
                  isDate={true}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
