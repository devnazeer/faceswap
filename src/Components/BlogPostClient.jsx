"use client";

import { useTranslation } from "react-i18next";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import ImageCard from "./ImageCard";

export default function BlogPostsClient({ posts, locale }) {
  const { t } = useTranslation("common");

  return (
    <Box
      sx={{
        background: "#111827",
        minHeight: "calc(100% - 68.5px)",
        py: "40px",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ color: "white", mb: 3 }}>
          {t("blogCard.title")}
        </Typography>
        <Grid container spacing={3}>
          {posts?.map((post) => (
            <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
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
