"use client";
import React from "react";
import { useParams } from "next/navigation";
import { BlogItems } from "@/Constants/BlogData";
import { Box, Container, Typography, List, ListItem } from "@mui/material";
import Image from "next/image";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = BlogItems.find((item) => item.slug === slug);

  if (!blog) return <p>Blog not found.</p>;

  const renderContent = (block) => {
    switch (block.type) {
      case "paragraph":
        return (
          <Typography
            key={block.prefix || block.text}
            variant="p"
            component="p"
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
            {block.suffix && (
              <>
                {" "}
                <strong>{block.suffix}</strong>
              </>
            )}
          </Typography>
        );
      case "heading":
        return (
          <Typography
            key={block.text}
            variant="h2"
            component="h2"
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
                {block.strongPrefix && (
                  <>
                    <strong>{block.strongPrefix} </strong>
                  </>
                )}
                {item && item}
                {block.strongSuffix && (
                  <>
                    <strong> {block.strongSuffix}</strong>
                  </>
                )}
              </ListItem>
            ))}
          </List>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <Box sx={{ py: "32px" }}>
        <Container maxWidth="lg">
          {blog.image && (
            <Box
              sx={{
                width: "100%",
                height: "576px",
                position: "relative",
                mb: "24px ",
              }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  objectFit: "contain",
                  height: "auto",
                  maxWidth: "100%",
                }}
                width={1200}
                height={576}
              />
            </Box>
          )}
          <Typography
            variant="h2"
            component="h1"
            sx={{ color: "#000", mb: "16px" }}
            gutterBottom
          >
            {blog.title}
          </Typography>
          <Typography
            variant="caption"
            display="block"
            sx={{ color: "#4b5563", mb: "16px" }}
          >
            {blog.date}
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{ color: "#4b5563", mb: "5px" }}
          >
            {blog.fullDescription}
          </Typography>

          {blog.content?.map((block, index) => (
            <React.Fragment key={index}>{renderContent(block)}</React.Fragment>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default BlogDetail;
