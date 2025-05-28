import React from "react";
import Image from "next/image";

const Images = ({ src, width, height, alt, borderRadius, objectFit }) => {
  return (
    <Image
      alt={alt || "Face Shape Detector"}
      src={src}
      width={width}
      height={height}
      priority={true}
      style={{
        objectFit: objectFit,
        maxWidth: "100%",
        height: "auto",
        aspectRatio: width / height,
        borderRadius: borderRadius,
      }}
    />
  );
};

export default Images;
