"use client";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FacebookOutlined, Instagram } from "@mui/icons-material";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import Images from "./Images";

function Footer() {
  const { t, i18n } = useTranslation("common");
  const currentLang = i18n.language;

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
                  {t("footer.pixel")}
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{ color: "#6b7280", fontSize: "14px", mb: "0px" }}
                >
                  {t("footer.subPixel")}
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, sm: 3, md: 3 }}>
                <Typography variant="h3" component="h3" mb={"8px"}>
                  {t("footer.tools")}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="a"
                    component="a"
                    className="footerLists"
                    href={`/`}
                  >
                    {t("footer.faceswap")}
                  </Typography>
                  <Typography
                    variant="a"
                    component="a"
                    className="footerLists"
                    href={`/multi-faceswap`}
                  >
                    {t("footer.multiface")}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, sm: 3, md: 3 }}>
                <Typography variant="h3" component="h3" mb={"8px"}>
                  {t("footer.sitemap")}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="a"
                    component="a"
                    className="footerLists"
                    href={`/about`}
                  >
                    {t("footer.about")}
                  </Typography>
                  <Typography
                    variant="a"
                    component="a"
                    className="footerLists"
                    href={`/terms`}
                  >
                    {t("footer.terms")}
                  </Typography>
                  <Typography
                    variant="a"
                    component="a"
                    className="footerLists"
                    href={`/privacy`}
                  >
                    {t("footer.privacy")}
                  </Typography>
                  <Typography
                    variant="a"
                    component="a"
                    className="footerLists"
                    href={`/blog`}
                  >
                    {t("footer.blog")}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, sm: 3, md: 3 }}>
                <Typography variant="h3" component="h3" mb={"8px"}>
                  {t("footer.follow")}
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
                  {t("footer.changeLanguage")}
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
