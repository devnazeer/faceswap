"use client";

import React from "react";
import ImageCard from "@/Components/ImageCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const BlogPosts = ({ locale }) => {
  const { t, i18n } = useTranslation("common");

  React.useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const post = t("blogCard.blogPost", { returnObjects: true });

  return (
    <Box>
      <Box
        sx={{
          background: "#111827",
          minHeight: "calc(100% - 68.5px)",
          py: "40px",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1">
            {t("blogCard.title")}
          </Typography>
          <Grid container spacing={"24px"}>
            {post.map((item, id) => (
              <Grid key={id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Link
                  style={{ textDecoration: "none" }}
                  // href={`https://swapinfo.xyz/wp-json/wp/v2/posts?slug=${item.slug}&lang=${locale}&_embed`}
                  href={`/${locale}/blog/${item.slug}`}
                >
                  <ImageCard
                    title={item.title}
                    description={item.description}
                    src={item.image}
                    date={item.date}
                    isDate={true}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default BlogPosts;
