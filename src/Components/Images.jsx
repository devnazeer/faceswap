import React from "react";
import Image from "next/image";

const Images = ({ src, width, height, alt, borderRadius, objectFit }) => {
  console.log(src, "src");
  return (
    <Image
      alt={alt || "Face Shape Detector"}
      src={src}
      width={width}
      height={height}
      loading="lazy"
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
