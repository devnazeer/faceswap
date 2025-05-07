import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Card = ({ title, description, src }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "#141414",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Image
            src={src}
            width={600}
            height={300}
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              height: "auto",
              aspectRatio: "1/1",
            }}
            alt="image"
          />
        </Box>
        <Box
          sx={{
            boxSizing: "border-box",
            padding: "16px",
            width: "50%",
          }}
        >
          <Typography variant="h5" component="h5" mb={"8px"}>
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
      </Box>
    </>
  );
};

export default Card;
