import React from "react";
import * as Y from "../yogaData";
import { useLanguage } from "../context/LanguageContext";

export default function IyengarPreview() {
  const { lang } = useLanguage();
  const content = lang === "en" ? Y.EN_IYENGAR : Y.HI_IYENGAR;

  return (
    <section id="iyengar" className="px-4 py-6">
      <h3 className="text-lg font-semibold mb-2">
        {lang === "en" ? "Iyengar Yoga" : "आयंगर योग"}
      </h3>
      <p className="text-sm leading-relaxed">{content.about}</p>
    </section>
  );
}
