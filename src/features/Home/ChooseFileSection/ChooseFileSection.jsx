"use client";
import ButtonLabel from "@/Components/ButtonLabel/ButtonLabel";
import ChooseFile from "@/Components/ChooseFile/ChooseFile";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

function ChooseFileSection() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };
  return (
    <>
      <Box
        component="section"
        sx={{
          backgroundImage: "linear-gradient(to right, #1f2937, #111827, #000)",
          py: "64px",
          borderWidth: "1px 0",
          borderColor: "rgb(104, 110, 121)",
          borderStyle: "solid",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={"32px"}>
            <Grid size={{ xs: 12, md: 6 }}>
              <ChooseFile
                para={
                  "Upload Base Image - Main image where faces will be replaced."
                }
                btnText={"Choose File"}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ChooseFile
                para={
                  "Upload Target Face - This face will replace the one in your base image."
                }
                btnText={"Choose File"}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: "32px",
              textAlign: "center",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ButtonLabel
              onClick={handleClick}
              btnText={"Swap Faces"}
              sx={{
                padding: "16px 32px !important",
                textAlign: "center",
                height: "50px",
              }}
            />
          </Box>
          {isActive && (
            <Box
              sx={{
                mt: "32px",
                textAlign: "center",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={"/logo.png"}
                width={476}
                height={320}
                style={{
                  maxWidth: "100%",
                  width: "476px",
                  height: "auto",
                  maxHeight: "320px",
                  objectFit: "contain",
                  aspectRatio: "476 / 320",
                  objectPosition: "center",
                  borderRadius: "8px",
                }}
                alt="Preview"
              />
              <Box
                sx={{
                  width: "476px",
                  maxWidth: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: { xs: "12px", sm: "24px" },
                  mt: "24px",
                }}
              >
                <ButtonLabel
                  onClick={() => setIsActive(false)}
                  isIcon={true}
                  code="&#xe863;"
                  label={"autorenew"}
                  btnText={"Start New Face Swap"}
                  sx={{
                    padding: {
                      xs: "12px 18px !important",
                      sm: "12px 24px !important",
                    },
                    fontWeight: "400 !important",
                    fontSize: { xs: "14px !important", sm: "16px !important" },
                    textAlign: "center",
                    height: "48px",
                  }}
                />
                <ButtonLabel
                  href={"/logo.png"}
                  download={true}
                  target={"blank"}
                  isIcon={true}
                  code="&#xf090;"
                  label={"download"}
                  btnText={"Download Result"}
                  sx={{
                    padding: {
                      xs: "12px 18px !important",
                      sm: "12px 24px !important",
                    },
                    fontWeight: "400 !important",
                    fontSize: { xs: "14px !important", sm: "16px !important" },
                    textAlign: "center",
                    height: "48px",
                  }}
                />
              </Box>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}

export default ChooseFileSection;
