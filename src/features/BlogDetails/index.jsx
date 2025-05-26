"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";

const BlogDetailPage = ({ slug, locale, postData }) => {
  const post = postData;

  if (!post) {
    return (
      <Box sx={{ py: "40px" }}>
        <Container maxWidth="lg">
          <Typography variant="h1" color="error">
            Post not found
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: "40px" }}>
      <Container maxWidth="lg">
        {post.featuredMedia?.source_url && (
          <Box
            component="img"
            src={post.featuredMedia.source_url}
            alt={post.title}
            sx={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "8px",
              mb: 4,
            }}
          />
        )}
        <Typography
          variant="h1"
          component="h1"
          dangerouslySetInnerHTML={{ __html: post.title }}
          sx={{ mb: 2, color: "#000" }}
        />
        <Typography
          variant="body1"
          component="p"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          {new Date(post.date).toLocaleDateString(locale)}
        </Typography>
        <Box
          dangerouslySetInnerHTML={{ __html: post.content }}
          sx={{
            "& img": {
              maxWidth: "100%",
              height: "auto",
              borderRadius: "4px",
              my: 2,
            },
            "& p": {
              mb: 2,
              lineHeight: 1.6,
            },
            "& h2, & h3": {
              mt: 4,
              mb: 2,
            },
          }}
        />
      </Container>
    </Box>
  );
};

export default BlogDetailPage;
