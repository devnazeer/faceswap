import React from "react";
import ImageCard from "@/Components/ImageCard/ImageCard";
import { BlogItems } from "@/Constants/BlogData";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

const Blog = () => {
  return (
    <Box sx={{ py: "8px" }}>
      <Box
        sx={{
          background: "#111827",
          minHeight: "calc(100% - 68.5px)",
          py: "40px",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2">
            Blog
          </Typography>
          <Grid container spacing={"24px"}>
            {BlogItems.map((item, id) => (
              <Grid key={id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Link
                  style={{ textDecoration: "none" }}
                  href={`/blog/${item.slug}`}
                  passHref
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

export default Blog;
