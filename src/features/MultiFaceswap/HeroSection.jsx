"use client";
import HeroSec from "@/Components/HeroSec";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const HeroSection = () => {
  const { t } = useTranslation("common");
  const [strength, setStrength] = useState(0.7);
  const [faceIndex, setFaceIndex] = useState(0); // Default to first face

  return (
    <>
      <HeroSec
        title={t("heromf.title")}
        para={t("heromf.para")}
        src="/multiface/hero.jpg"
        uploadPara1={t("heromf.uploadPara1")}
        uploadPara2={t("heromf.uploadPara2")}
        code1="&#xe7fe;"
        label1={"person_add"}
        code2="&#xe439;"
        label2={"add_a_photo"}
        codeBtn="&#xe86a;"
        labelBtn={"cached"}
        btnText={t("heromf.btnText")}
        note={t("heromf.note")}
        apiUrl={"https://api.faceswaponline.ai/multifaceswap"}
        isMulti={true}
        extraFields={{
          strength,
          face_index: faceIndex,
          multiple_faces: "true", // Ensure string value as expected by API
        }}
      />
    </>
  );
};

export default HeroSection;
