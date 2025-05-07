import { Button } from "@mui/material";
import React from "react";
import Icon from "../Icon/Icon";

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
              sx={{ mr: "8px", fontSize: "18px !important", color: "#fff" }}
            />
          )}
          <span>{btnText}</span>
        </a>
      </Button>
    </>
  );
}

export default ButtonLabel;
