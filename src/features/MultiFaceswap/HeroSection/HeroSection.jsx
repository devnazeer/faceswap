"use client";
import HeroSec from "@/Components/HeroSec/HeroSec";
import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroSec
        // isHome={false}
        // isMfs={true}
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
        apiUrl={"http://147.93.62.9:8765/multifaceswap"}
        extraFields={{ face_index: 0 }}
      />
    </>
  );
}

export default HeroSection;
