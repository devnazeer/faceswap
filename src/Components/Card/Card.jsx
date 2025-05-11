import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ButtonLabel from "../ButtonLabel/ButtonLabel";

const Card = ({ title, description, src, isBtn, href, btnText }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: !isBtn ? { xs: "column", lg: "row" } : "column",
          background: "#141414",
          borderRadius: "20px",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ width: !isBtn ? { xs: "100%", lg: "50%" } : "100%" }}>
          <Image
            src={src}
            width={600}
            height={559}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxWidth: "100%",
              height: "auto",
              aspectRatio: "600/559",
            }}
            alt="image"
          />
        </Box>
        <Box
          sx={{
            boxSizing: "border-box",
            width: !isBtn ? { xs: "100%", lg: "50%" } : "100%",
            py: !isBtn
              ? { xs: "50px", sm: "16px", md: "50px", lg: "16px" }
              : { xs: "40px", md: "50px" },
            px: !isBtn
              ? { xs: "20px", sm: "16px", md: "16px", lg: "16px" }
              : { xs: "20px", md: "20px" },
          }}
        >
          <Typography variant="h3" component="h3" mb={"8px"}>
            {title}
          </Typography>
          <Typography
            variant="p"
            component="p"
            mb={"0px"}
            sx={{
              color: "#9ca3af",
              fontSize: "16px",
            }}
          >
            {description}
          </Typography>
          {isBtn && (
            <Box sx={{ mt: "80px" }}>
              <ButtonLabel
                btnText={btnText}
                href={href}
                sx={{
                  width: "100% !important",
                  // mx: "auto !important",
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Card;
