"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("common");
  const items = t("about.content", { returnObjects: true });
  const renderContent = (block) => {
    switch (block.type) {
      case "paragraph":
        return (
          <Typography
            key={block.prefix || block.text}
            variant="p"
            component="p"
            sx={{
              color: "#fff",
              mb: block.customMargin ? "17px" : "5px !important",
            }}
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
              color: "#fff",
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
                  color: "#fff",
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
    <>
      <Box>
        <Box sx={{ pt: "24px", background: "#000" }}>
          <Container maxWidth="md">
            <Typography variant="h2" component={"h2"} mb={"24px"}>
              {t("about.title")}
            </Typography>
            <Box pb={"32px"}>
              {items.map((block, index) => (
                <React.Fragment key={index}>
                  {renderContent(block)}
                </React.Fragment>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default About;
