import React from "react";
import Image from "next/image";

const Images = ({
  src,
  width,
  height,
  alt = "Face Shape Detector",
  borderRadius,
  objectFit = "cover",
  sizes = "100vw",
  aspectRatio,
  quality = 75,
}) => {
  return (
    <Image
      alt={alt || "Face Shape Detector"}
      src={src}
      width={width}
      height={height}
      priority={true}
      sizes={sizes}
      quality={quality}
      style={{
        objectFit: objectFit,
        maxWidth: "100%",
        height: "auto",
        borderRadius: borderRadius,
        ...(aspectRatio ? { aspectRatio } : {}),
        color: "unset",
      }}
    />
  );
};

export default Images;
