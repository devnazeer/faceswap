"use client";
import HeroSec from "@/Components/HeroSec";
import React from "react";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroSec
        // isMfs={false}
        title={t("hero.title")}
        para={t("hero.para")}
        src="/home/1.webp"
        // isHome={true}
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
        apiUrl={"http://147.93.62.9:8765/faceswap"}
      />
    </>
  );
}

export default HeroSection;
