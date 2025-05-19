"use client";
import { Box } from "@mui/material";
import clsx from "clsx";
import React from "react";
export default function Icon({ className, code, children, aos, sx, ...props }) {
  return (
    <Box
      component={"span"}
      data-aos={aos}
      className={clsx("material-symbols-outlined", className)}
      {...props}
      sx={sx}
    >
      {code || children}
    </Box>
  );
}
