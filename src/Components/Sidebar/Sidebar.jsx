"use client";
import { useEffect, useState } from "react";
import { Box, List, ListItem, Typography, Link, Drawer } from "@mui/material";
import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Image from "next/image";
import Footer from "../Footer/Footer";
import Icon from "../Icon/Icon";
import { useTranslation } from "react-i18next";

const Sidebar = ({ children }) => {
  const { t } = useTranslation("common");

  // const items = t("sidebar.cards", { returnObjects: true });
  const items = t("sidebar.cards", { returnObjects: true }) || [];

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [drawar, setDrawar] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true); // Only execute after the component is mounted on the client
  // }, []);

  // // Only render the component after it's mounted to prevent hydration issues
  // if (!isMounted) return null;

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const isReady = true;
  //   if (isReady) {
  //     setLoading(false);
  //   }
  // }, []);

  const toggleDrawer = () => {
    setDrawar(!drawar);
  };
  // const handlers = {
  //   toggleDrawer,
  // };

  // if (!Array.isArray(items)) {
  //   return (
  //     <Box>
  //       <Typography color="error">
  //         Error: Sidebar items are not an array!
  //       </Typography>
  //     </Box>
  //   );
  // }
  return (
    <>
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
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#2a2e38",
            borderRadius: "5px",
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Link href="/">
            <Image
              src="/logo.png"
              width={208}
              height={80}
              style={{
                maxWidth: "100%",
                height: "80px",
                aspectRatio: "13 / 5",
                objectFit: "contain",
                objectPosition: "center",
              }}
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
                key={id}
                disablePadding
                sx={{
                  "&:hover": {
                    color: "#fff",
                    background: "#0891b2",
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
                    transition: "all 0.3s linear",
                    "&:hover span": {
                      color: "#fff",
                      background: "#0891b2",
                      width: "100%",
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
      <Box
        sx={{
          position: "relative",
          width: isOpen
            ? { xs: "100%", md: "calc(100% - 256px)" }
            : { xs: "100%", md: "calc(100% - 0px)" },
          left: isOpen ? { xs: "0px", md: "256px" } : { xs: "0px", md: "0px" },
          transition: "all 0.2s linear",
        }}
      >
        <Box
          sx={{
            top: "0%",
            position: "fixed",
            width: isOpen ? "calc(100% - 256px)" : "100%",
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
        <Box sx={{ width: "100%", height: "66px", background: "#000" }} />
        <Box sx={{ boxSizing: "border-box" }}>
          <Box>{children}</Box>
        </Box>
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
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#121418",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#2a2e38",
              borderRadius: "5px",
            },
          },
        }}
        anchor="left"
        open={drawar}
        onClose={toggleDrawer}
      >
        <Box>
          <Box
            sx={{
              p: "16px",
              display: "flex",
              alignItems: "center",
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
              <Image
                src="/logo.png"
                width={50}
                height={50}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  aspectRatio: "1 / 1",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
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
                  key={id}
                  disablePadding
                  sx={{
                    "&:hover": {
                      color: "#fff",
                      background: "#0891b2",
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
                      transition: "all 0.3s linear",
                      "&:hover span": {
                        color: "#fff",
                        background: "#0891b2",
                        width: "100%",
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
