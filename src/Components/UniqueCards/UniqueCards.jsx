import { Box, Typography } from "@mui/material";
import React from "react";
import Icon from "../Icon/Icon";

function UniqueCards({
  title,
  para,
  isCard,
  isIcon,
  code,
  label,
  title2,
  para2,
}) {
  return (
    <>
      {isCard && (
        <Box
          className="uniqueCard"
          sx={{
            height: "100%",
            width: "100%",
            boxSizing: "border-box",
            padding: isCard ? { xs: "24px 16px", sm: "24px" } : "12px",
            border: isCard ? "1px solid #1f2937" : "",
            backgroundImage: `linear-gradient(
    to bottom right,
    #111827,
    rgba(8, 144, 178, 0.18),
    #1f2937cc
  )`,
            borderRadius: "8px",
            transition: "all 0.3s linear",
          }}
        >
          <Typography variant="h3" component="h3" marginBottom={"16px"}>
            {title}
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{ color: "#9ca3af", margin: 0 }}
          >
            {para}
          </Typography>
        </Box>
      )}
      {isIcon && (
        <Box
          className="uniqueCard"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            border: "1px solid #0891b2",
            padding: "32px 16px",
            boxSizing: "border-box",
            borderRadius: "15px",
            background:
              " linear-gradient(to bottom right, #111827, rgba(8, 144, 178, 0.12), #1f2937cc)",
          }}
        >
          <Box
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0891b2",
            }}
          >
            <Icon
              code={code}
              label={label}
              sx={{ fontSize: "32px", color: "#fff", fontWeight: "600" }}
            />
          </Box>
          <Typography
            variant="h3"
            component="h3"
            marginBottom={"0px"}
            textAlign={"center"}
            sx={{
              color: "#0891b2",
            }}
          >
            {title2}
          </Typography>
          <Typography
            variant="p"
            component="p"
            textAlign={"center"}
            sx={{ color: "#fff", margin: 0 }}
          >
            {para2}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default UniqueCards;
