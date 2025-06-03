"use client";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FacebookOutlined, Instagram } from "@mui/icons-material";
import LanguageToggle from "./LanguageToggle";
import Images from "./Images";

function Footer() {
  return (
    <>
      <>
        <Box
          component="section"
          sx={{
            background: "linear-gradient(to right, #111827, #000000)",
            color: "#9CA3AF",
            py: "32px",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: "24px", md: "32px" }}>
              <Grid size={{ xs: 6, sm: 3, md: 3 }}>
                <Link href="/">
                  <Images
                    src={"/logo.png"}
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="logo"
                  />
                </Link>
                <Typography
                  variant="p"
                  component="p"
                  fontSize={"14px"}
                  my={"8px"}
                >
                  Pixelmorph
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{ color: "#6b7280", fontSize: "14px", mb: "0px" }}
                >
                  Pixelmorph. All rights reserved.
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, sm: 3, md: 3 }}>
                <Typography variant="h3" component="h3" mb={"8px"}>
                  Tools
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="a"
                    component="a"
                    className="footerLists"
                    href={`/`}
                  >
                    faceswap
                  </Typography>
                  <Typography
                    variant="a"
                    component="a"
                    className="footerLists"
                    href={`/multi-faceswap`}
                  >
                    Multi-Faceswap
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, sm: 3, md: 3 }}>
                <Typography variant="h3" component="h3" mb={"8px"}>
                  Sitemap
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="a"
                    component="a"
                    className="footerLists"
                    href={`/about`}
                  >
                    About Us
                  </Typography>
                  <Typography
                    variant="a"
                    component="a"
                    className="footerLists"
                    href={`/terms`}
                  >
                    Terms of Service
                  </Typography>
                  <Typography
                    variant="a"
                    component="a"
                    className="footerLists"
                    href={`/privacy`}
                  >
                    Privacy Policy
                  </Typography>
                  <Typography
                    variant="a"
                    component="a"
                    className="footerLists"
                    href={`/blog`}
                  >
                    Blog
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, sm: 3, md: 3 }}>
                <Typography variant="h3" component="h3" mb={"8px"}>
                  Follow Us
                </Typography>
                <Box
                  sx={{ display: "flex", gap: "10px", marginBottom: "16px" }}
                >
                  <a className="footerLists" href="#" aria-label="twitter">
                    <TwitterIcon />
                  </a>
                  <a className="footerLists" href="#" aria-label="facebook">
                    <FacebookOutlined />
                  </a>
                  <a className="footerLists" href="#" aria-label="instagram">
                    <Instagram />
                  </a>
                </Box>
                <Typography
                  variant="p"
                  component="p"
                  sx={{ color: "#fff", fontSize: "14px", mb: "6px" }}
                >
                  Change Language
                </Typography>
                <LanguageToggle isBottom={true} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    </>
  );
}

export default Footer;
