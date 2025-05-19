import { Button } from "@mui/material";
import React from "react";
import Icon from "./Icon";

function ButtonLabel({
  btnText,
  sx,
  onClick,
  code,
  label,
  isIcon,
  href,
  download,
  target,
}) {
  return (
    <>
      <Button
        onClick={onClick}
        variant="contained"
        id="btn"
        className="btnComponent"
        sx={sx}
      >
        <a
          href={href}
          download={download}
          target={target}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          {isIcon && (
            <Icon
              code={code}
              label={label}
              sx={{
                mr: "10px",
                fontSize: "18px !important",
                fontWeight: "600 !important",
                color: "#fff",
              }}
            />
          )}
          <span>{btnText}</span>
        </a>
      </Button>
    </>
  );
}

export default ButtonLabel;
