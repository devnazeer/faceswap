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
        dark: "#1976d2", // button color
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
      fontSize: 48,
      fontWeight: 600,
      textTransform: "capitalize",
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
      fontSize: 20,
      fontWeight: 600,
      color: "#fff",
      lineHeight: "normal",
      marginBottom: 24,
      textTransform: "capitalize",
      "@media (max-width:799px)": {
        fontSize: 18,
      },
    },
    h4: {
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
      fontSize: 20,
      fontWeight: 600,
      color: "#fff",

      lineHeight: "normal",
      marginBottom: 20,
      "@media (max-width:599px)": {
        fontSize: "18px",
      },
    },

    h6: {
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
    },
    span: {
      fontSize: 16,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 30,
      fontWeight: 400,
      lineHeight: "normal",
    },
    subtitle2: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: "normal",
    },
    button: {
      fontSize: 18,
      fontWeight: 500,
      textTransform: "capitalize",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".flex": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".align": {
          display: "flex",
          alignItems: "center",
        },
        ".space-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
      },
    },
  },
});

export default theme;
