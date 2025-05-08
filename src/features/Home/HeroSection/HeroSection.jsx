import ButtonLabel from "@/Components/ButtonLabel/ButtonLabel";
import ChooseFile from "@/Components/ChooseFile/ChooseFile";
import HeroSec from "@/Components/HeroSec/HeroSec";
import Icon from "@/Components/Icon/Icon";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function HeroSection() {
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
        <HeroSec
          title="Free AI Face Swap - Best Face Swapper Online"
          para="Explore the fun of AI Face Swap with our free Face Swapper. Swap
                faces instantly with friends, celebrities, or anyone! AI makes
                it easy and fun to create unique, shareable face swaps in
                seconds."
          src="/home/1.webp"
          isHome={true}
          uploadPara1={"Upload Face"}
          uploadPara2={"Base Image"}
          code1="&#xe7fe;"
          label1={"person_add"}
          code2="&#xe439;"
          label2={"add_a_photo"}
          codeBtn="&#xe86a;"
          labelBtn={"cached"}
          btnText={"Swap Face"}
          note={"Unlock More Face Swap Templates or DIY Swap in the App"}
        />
        {/* <Container maxWidth="lg">
          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{ mb: "16px" }}
          >
            Free AI Face Swap - Best Face Swapper Online
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{ mb: "32px", color: "#fffc", px: { xs: "16px", sm: "48px" } }}
            align="center"
          >
            Explore the fun of AI Face Swap with our free Face Swapper. Swap
            faces instantly with friends, celebrities, or anyone! AI makes it
            easy and fun to create unique, shareable face swaps in seconds.
          </Typography>
          <Grid container spacing={"24px"}>
            <Grid size={{ xs: 12, md: 6, lg: 8 }}>
              <Image
                src="/home/1.webp"
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
                  <ChooseFile
                    para={"Upload face"}
                    code="&#xe7fe;"
                    label={"person_add"}
                  />
                </Grid>
                <Grid size={{ xs: 6, md: 6, lg: 6 }}>
                  <ChooseFile
                    para={"Upload base"}
                    code="&#xe439;"
                    label={"add_a_photo"}
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
                  btnText={"Swap Face"}
                  isIcon={true}
                  code="&#xe8d4;"
                  label={"swap_horiz"}
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
                Unlock More Face Swap Templates or DIY Swap in the App
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
        </Container> */}
      </Box>
    </>
  );
}

export default HeroSection;
