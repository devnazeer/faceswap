"use client";
import HeroSec from "@/Components/HeroSec";
import React from "react";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroSec
        title={t("hero.title")}
        para={t("hero.para")}
        src="/home/1.webp"
        uploadPara1={t("hero.uploadPara1")}
        uploadPara2={t("hero.uploadPara2")}
        code1="&#xe7fe;"
        label1={"person_add"}
        code2="&#xe439;"
        label2={"add_a_photo"}
        codeBtn="&#xe86a;"
        labelBtn={"cached"}
        btnText={t("hero.btnText")}
        note={t("hero.note")}
        apiUrl={"https://api.faceswaponline.ai/faceswap"}
      />
    </>
  );
}

export default HeroSection;
