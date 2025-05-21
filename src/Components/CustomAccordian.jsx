"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function CustomAccordion({ FaqsData = [] }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box
        className="align"
        sx={{
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            background: "transparent",
            pb: "20px",
          }}
        >
          <Grid container spacing={"24px"}>
            {FaqsData.map((item, id) => (
              <Grid key={id} size={{ xs: 12, sm: 6 }}>
                <Accordion
                  expanded={expanded === `panel${id}`}
                  onChange={handleChange(`panel${id}`)}
                  key={id}
                  sx={{
                    background: "#000",
                    border: "1px solid #1f2937",
                    transition: "all 0.3s linear",
                    boxShadow: "none",
                    "&.MuiPaper-rounded": {
                      borderRadius: "8px",
                      "&::before": {
                        display: "none",
                      },
                    },
                    "&.Mui-expanded": {
                      background: "#000",
                      boxShadow: " 0 0 20px 0rgba(121, 121, 121, 0.25)",
                      margin: "0 !important",
                      transform: "unset !important",
                    },
                    "& button": {
                      minHeight: "unset !important",
                    },
                  }}
                >
                  <AccordionSummary
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "5px",
                      px: "16px",
                      boxSizing: "border-box",
                      my: "16px",
                      "& span": {
                        margin: "0px !important",
                      },
                      "& svg": {
                        transition: "all 0.2s linear",
                        transform:
                          expanded === `panel${id}`
                            ? "rotate(50deg)"
                            : "rotate(0deg)",
                      },
                      "& span:nth-of-type(2)": {
                        transform: "unset !important",
                      },
                    }}
                    expandIcon={
                      <AddIcon sx={{ color: "#fff", fontSize: "30px" }} />
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography
                      variant="p"
                      component={"p"}
                      sx={{ fontSize: "18px", color: "#fff" }}
                      m={0}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      boxSizing: "border-box",
                      pb: "16px",
                    }}
                  >
                    <Typography
                      variant="p"
                      component={"p"}
                      sx={{
                        color: "#9ca3af",
                        fontSize: "16px",
                        mb: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default CustomAccordion;
