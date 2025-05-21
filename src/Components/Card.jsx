import { Box, Typography } from "@mui/material";
import React from "react";
import ButtonLabel from "./ButtonLabel";
import Images from "./Images";

const Card = ({ title, description, src, isBtn, href, btnText }) => {
  return (
    <>
      <Box
        className="align"
        sx={{
          flexDirection: !isBtn ? { xs: "column", lg: "row" } : "column",
          background: "#141414",
          borderRadius: "20px",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ width: !isBtn ? { xs: "100%", lg: "50%" } : "100%" }}>
          <Images src={src} width={600} height={559} objectFit={"cover"} />
        </Box>
        <Box
          sx={{
            boxSizing: "border-box",
            height: "100%",
            width: !isBtn ? { xs: "100%", lg: "50%" } : "100%",
            py: !isBtn
              ? { xs: "50px", sm: "16px", md: "50px", lg: "16px" }
              : { xs: "40px", md: "50px" },
            px: !isBtn
              ? { xs: "20px", sm: "16px", md: "16px", lg: "16px" }
              : { xs: "20px", md: "20px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
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
          </Box>
          {isBtn && (
            <Box sx={{ mt: "80px" }}>
              <ButtonLabel
                btnText={btnText}
                href={href}
                sx={{
                  mx: "auto !important",
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
