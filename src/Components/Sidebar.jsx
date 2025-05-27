"use client";
import { useState } from "react";
import { Box, List, ListItem, Typography, Link, Drawer } from "@mui/material";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import Icon from "./Icon";
import { useTranslation } from "react-i18next";
import Images from "./Images";

const Sidebar = ({ children }) => {
  const { t, i18n } = useTranslation("common");
  const currentLang = i18n.language;

  const items = t("sidebar.cards", { returnObjects: true }) || [];

  const [isOpen, setIsOpen] = useState(false);
  const [drawar, setDrawar] = useState(false);
  const pathname = usePathname();

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrawer = () => {
    setDrawar(!drawar);
  };

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box
          sx={{
            pt: "24px",
            borderBottom: "1px solid #1f2937",
            boxSizing: "border-box",
            backgroundColor: "#000",
            position: "fixed",
            top: "0",
            left: "0",
            height: "100%",
            width: isOpen ? "256px" : "0px",
            transition: " all 0.2s linear",
            zIndex: "100 ",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Link href="/">
              <Images
                src="/logo.png"
                width={208}
                height={80}
                objectFit="contain"
                alt="logo"
              />
            </Link>
          </Box>
          <Box
            component={"div"}
            sx={{
              borderBottom: "1px solid #1f2937",
              padding: isOpen ? "24px" : "0px",
            }}
          >
            <List
              sx={{
                padding: "0",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {items.map((item, id) => (
                <ListItem
                  key={item.href}
                  disablePadding
                  sx={{
                    "&:hover": {
                      color: "#fff",
                      background: "#1976d2",
                      width: "100%",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    sx={{
                      padding: "8px 16px",
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "#fff",
                      width: "100%",
                      transition: "all 0.3s linear",
                      "&:hover span": {
                        color: "#fff",
                        background: "#1976d2",
                      },
                    }}
                  >
                    <Typography
                      className="text"
                      variant="span"
                      component="span"
                      sx={{
                        margin: "0",
                        fontWeight: pathname == item.href ? "700" : "400",
                        fontSize: pathname == item.href ? "18px" : "16px",
                        transition: "opacity 0.3s linear",
                        opacity: isOpen ? "1" : "0",
                        display: isOpen ? "block" : "none",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: isOpen
            ? { xs: "100%", md: "calc(100% - 256px)" }
            : { xs: "100%", md: "100%" },
          left: isOpen ? { xs: "0px", md: "256px" } : { xs: "0px", md: "0px" },
          transition: "all 0.2s linear",
        }}
      >
        <Box
          sx={{
            top: "0%",
            position: "sticky",
            width: "100%",
            boxSizing: "border-box",
            transition: "all 0.2s linear",
            zIndex: "100",
          }}
        >
          <Box sx={{ display: { xs: "block", md: "none" }, zIndex: "1200" }}>
            <Header onClick={toggleDrawer} />
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Header onClick={toggleHandler} />
          </Box>
        </Box>
        <>{children}</>
        <Footer />
      </Box>
      {/* // small screen */}
      <Drawer
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          bottom: "60px",
          zIndex: "1100",
          "& .MuiDrawer-paper": {
            position: "absolute",
            bottom: "0",
            width: "70%",
            height: "100vh",
            background: "#121418",
          },
        }}
        anchor="left"
        open={drawar}
        onClose={toggleDrawer}
      >
        <Box>
          <Box
            className="align"
            sx={{
              p: "16px",
              gap: "16px",
            }}
          >
            <Box>
              <Icon
                onClick={toggleDrawer}
                code="&#xe5d2;"
                aria_label="menu"
                sx={{
                  fontSize: 24,
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.2s linear",
                }}
              />
            </Box>
            <Link href="/">
              <Images
                src="/logo.png"
                width={208}
                height={80}
                objectFit="contain"
                alt="logo"
              />
            </Link>
          </Box>
          <Box
            component={"div"}
            sx={{
              borderBottom: "1px solid #1f2937",
            }}
          >
            <List
              sx={{
                padding: "0",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {items.map((item, id) => (
                <ListItem
                  key={item.href}
                  disablePadding
                  sx={{
                    "&:hover": {
                      color: "#fff",
                      background: "#1976d2",
                      width: "100%",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    sx={{
                      padding: "8px 16px",
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "#fff",
                      width: "100%",
                      transition: "all 0.3s linear",
                      "&:hover span": {
                        color: "#fff",
                        background: "#1976d2",
                      },
                    }}
                  >
                    <Typography
                      className="text"
                      variant="span"
                      component="span"
                      sx={{
                        margin: "0",
                        fontWeight: pathname == item.href ? "700" : "400",
                        fontSize: pathname == item.href ? "18px" : "16px",
                        transition: "opacity 0.3s linear",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
