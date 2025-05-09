import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ChooseFile from "../ChooseFile/ChooseFile";
import Icon from "../Icon/Icon";
import ButtonLabel from "../ButtonLabel/ButtonLabel";

function HeroSec({
  title,
  para,
  src,
  isHome,
  uploadPara1,
  uploadPara2,
  code1,
  label1,
  code2,
  label2,
  codeBtn,
  labelBtn,
  btnText,
  note,
  isMfs,
}) {
  return (
    <>
      <Box
        component="section"
        sx={{
          width: "100%",
          backgroundImage:
            "linear-gradient(to bottom right, #111827, #000000, #1f2937cc)",
          py: "64px",
        }}
      >
        <Container maxWidth="lg">
          {isHome && (
            <Typography
              variant="h1"
              component="h1"
              align="center"
              sx={{ mb: "16px" }}
            >
              {title}
            </Typography>
          )}
          {isMfs && (
            <Typography
              variant="h1"
              component="h1"
              align="center"
              sx={{ mb: "16px" }}
            >
              {title}
            </Typography>
          )}
          <Typography
            variant="p"
            component="p"
            sx={{ mb: "32px", color: "#fffc", px: { xs: "16px", sm: "48px" } }}
            align="center"
          >
            {para}
          </Typography>
          <Grid container spacing={"24px"}>
            <Grid size={{ xs: 12, md: 6, lg: 8 }}>
              <Image
                src={src}
                width={800}
                height={400}
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  height: "auto",
                  // aspectRatio:
                  borderRadius: "20px",
                }}
                alt="image"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <Grid
                container
                spacing={"10px"}
                sx={{ position: "relative" }}
                justifyContent={"center"}
              >
                <Grid
                  size={{ xs: 6, md: 6, lg: 6 }}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <ChooseFile para={uploadPara1} code={code1} label={label1} />
                </Grid>
                <Grid size={{ xs: 6, md: 6, lg: 6 }}>
                  <ChooseFile
                    para={uploadPara2}
                    code={code2}
                    label={{ label2 }}
                  />
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0891b2",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Icon
                    code="&#xe941;"
                    label={"arrow_right_alt"}
                    sx={{ fontSize: "20px !important", color: "#fff" }}
                  />
                </Box>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  // background: "red",
                  mb: "24px",
                }}
              >
                <ButtonLabel
                  btnText={btnText}
                  isIcon={true}
                  code={codeBtn}
                  label={labelBtn}
                  sx={{ mt: "20px", textAlign: "center" }}
                />
              </Box>
              <Typography
                variant="p"
                component="p"
                align="center"
                sx={{
                  background: "linear-gradient(to right,#818cf8, #0891b2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "600",
                  mb: "24px",
                }}
              >
                {note}
              </Typography>
              <Box
                sx={{
                  p: "8px",
                  mb: "4px",
                  background: "#fff",
                  width: "115px",
                  height: "115px",
                  display: "flex",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  borderRadius: "10px",
                  textAlign: "center",
                  mx: "auto",
                }}
              >
                <Image
                  src={"/home/qrCode.png"}
                  width={99}
                  height={99}
                  style={{
                    maxWidth: "100%",
                    // width: "100%",
                    height: "100%",
                    maxHeight: "300px",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  alt="qr code"
                />
              </Box>
              <Typography
                variant="p"
                component="p"
                align="center"
                sx={{
                  color: "#fff9",
                  fontSize: "12px",
                }}
              >
                Scan to Download
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default HeroSec;
