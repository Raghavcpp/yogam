import React from "react";
import * as Y from "../yogaData";
import { useLanguage } from "../context/LanguageContext";

export default function Iyengar() {
  const { lang } = useLanguage();
  const content = lang === "en" ? Y.EN_IYENGAR : Y.HI_IYENGAR;
  const wiki = "https://en.wikipedia.org/wiki/Iyengar_Yoga";

  return (
    <section id="iyengar" className="px-4 py-6">
      <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow">
        <h4 className="text-base font-semibold mb-2">
          {lang === "en" ? "Iyengar Yoga" : "आयंगर योग"}
        </h4>
        <p className="text-sm leading-relaxed mb-3">{content.about}</p>
        <a
          href={wiki}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline"
        >
          {lang === "en" ? "Read on Wikipedia" : "विकिपीडिया पर पढ़ें"}
        </a>
      </div>
    </section>
  );
}
