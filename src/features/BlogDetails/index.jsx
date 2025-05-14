"use client";
import React, { useEffect } from "react";
import { Box, Container, Typography, List, ListItem } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const BlogDetailPage = ({ slug, locale }) => {
  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const blog = t(`blogDetails.${slug}`, { returnObjects: true });

  if (!blog) return <p>Blog not found.</p>;

  const renderContent = (block) => {
    switch (block.type) {
      case "paragraph":
        return (
          <Typography
            key={block.prefix || block.text}
            variant="body1"
            sx={{ color: "#4b5563", mb: "5px" }}
          >
            {block.prefix && <strong>{block.prefix} </strong>}
            {Array.isArray(block.text)
              ? block.text.map((part, i) =>
                  typeof part === "string" ? (
                    part
                  ) : (
                    <strong key={i}>{part.bold}</strong>
                  )
                )
              : block.text}
            {block.suffix && <strong> {block.suffix}</strong>}
          </Typography>
        );
      case "heading":
        return (
          <Typography
            key={block.text}
            variant="h2"
            sx={{
              color: "#4b5563",
              mb: "5px",
              fontSize: { xs: "16px", sm: "16px" },
            }}
          >
            <strong>{block.text}</strong>
          </Typography>
        );
      case "list":
        return (
          <List key={block.items?.join()} sx={{ p: 0 }}>
            {block.items?.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  listStyle: "none",
                  color: "#4b5563",
                  mb: "5px",
                  fontSize: "16px",
                  p: 0,
                }}
              >
                {block.strongPrefix && <strong>{block.strongPrefix} </strong>}
                {item}
                {block.strongSuffix && <strong> {block.strongSuffix}</strong>}
              </ListItem>
            ))}
          </List>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ py: "32px" }}>
      <Container maxWidth="lg">
        {blog.image && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mb: "24px",
            }}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              style={{
                borderRadius: "8px",
                objectFit: "contain",
                height: "auto",
                maxWidth: "100%",
                aspectRatio: "1024 / 576",
              }}
              width={1024}
              height={576}
            />
          </Box>
        )}
      </Container>
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          sx={{ color: "#000 ", pt: "24px", mb: "16px" }}
        >
          {blog.title}
        </Typography>
        <Typography variant="caption" sx={{ color: "#4b5563", mb: "16px" }}>
          {blog.date}
        </Typography>
        <Typography variant="body1" sx={{ color: "#4b5563", mb: "5px" }}>
          {blog.fullDescription}
        </Typography>
        {blog.content.map((block, index) => (
          <React.Fragment key={index}>{renderContent(block)}</React.Fragment>
        ))}
      </Container>
    </Box>
  );
};

export default BlogDetailPage;
