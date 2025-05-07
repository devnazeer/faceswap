"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  1: "4px",
  2: "8px",
  3: "16px",
  4: "24px",
  5: "32px",
  6: "40px",
  7: "48px",
  8: "64px",
  9: "128px",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1920,
    },
    palette: {
      primary: {
        main: "#1f2937",
        dark: "#0D2237",
      },
      secondary: {
        main: "#2E77AE",
        light: "#E0EAF4",
        dark: "#F6F6F6",
      },
    },
  },
  typography: {
    h1: {
      //   fontFamily: maven_pro.style.fontFamily,
      fontSize: 48,
      fontWeight: 600,
      textTransform: "uppercase",
      lineHeight: "normal",
      marginBottom: 40,
      color: "#fff",
      "@media (max-width:799px)": {
        fontSize: 38,
      },
      "@media (max-width:599px)": {
        fontSize: 32,
      },
    },
    h2: {
      //   fontFamily: maven_pro.style.fontFamily,
      fontSize: 36,
      fontWeight: 600,
      marginBottom: 32,
      color: "#fff",

      textTransform: "capitalize",
      lineHeight: "normal",
      "@media (max-width:799px)": {
        fontSize: 34,
      },
      "@media (max-width:599px)": {
        fontSize: "30px",
      },
    },
    h3: {
      //   fontFamily: nunito.style.fontFamily,
      fontSize: 24,
      fontWeight: 600,
      color: "#fff",

      lineHeight: "normal",
      marginBottom: 24,
      textTransform: "capitalize",
      "@media (max-width:799px)": {
        fontSize: 22,
      },
    },
    h4: {
      //   fontFamily: nunito.style.fontFamily,
      fontSize: 22,
      fontWeight: 500,
      color: "#fff",

      lineHeight: "normal",
      marginBottom: 22,
      "@media (max-width:599px)": {
        fontSize: "20px",
      },
    },
    h5: {
      //   fontFamily: nunito.style.fontFamily,
      fontSize: 20,
      fontWeight: 400,
      color: "#fff",

      lineHeight: "normal",
      marginBottom: 20,
      "@media (max-width:599px)": {
        fontSize: "18px",
      },
    },

    h6: {
      //   fontFamily: nunito.style.fontFamily,
      fontSize: 18,
      fontWeight: 400,
      color: "#fff",

      lineHeight: "normal",
      marginBottom: 18,
      "@media (max-width:599px)": {
        fontSize: "16px",
      },
    },
    p: {
      fontSize: 16,
      fontWeight: 400,
      marginBottom: 16,
      color: "#d1d5db",
      fontFamily: "roboto",
    },
    span: {
      fontSize: 16,
      fontWeight: 400,
      //   marginBottom: 16,
      //   color: "#d1d5db",
      fontFamily: "roboto",
    },
    subtitle1: {
      //   fontFamily: maven_pro.style.fontFamily,
      fontSize: 30,
      fontWeight: 400,
      lineHeight: "normal",
    },
    subtitle2: {
      //   fontFamily: maven_pro.style.fontFamily,
      fontSize: 24,
      fontWeight: 400,
      lineHeight: "normal",
    },
    button: {
      //   fontFamily: nunito.style.fontFamily,
      fontSize: 18,
      fontWeight: 500,
      textTransform: "capitalize",
    },
  },

  MuiCssBaseline: {
    "@global": {
      // '@font-face': fonts,
      html: {},
      ".material-symbols-outlined": {
        fontSize: 25,
        opacity: 0,
        transition: "opacity 200ms ease-in-out",
        maxWidth: 25,
      },
      ".font-loaded .material-symbols-outlined": {
        opacity: 1,
        maxWidth: "none",
      },
    },
  },
});

export default theme;
