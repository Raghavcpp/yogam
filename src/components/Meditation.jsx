import React from "react";
import * as Y from "../yogaData";
import { useLanguage } from "../context/LanguageContext";

export default function Meditation() {
  const { lang } = useLanguage();
  const content = lang === "en" ? Y.EN_MEDITATION : Y.HI_MEDITATION;

  return (
    <section id="meditation" className="px-4 py-6">
      <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow">
        <h5 className="font-semibold mb-2">
          {lang === "en" ? "Meditation" : "ध्यान"}
        </h5>
        <p className="text-sm">{content.connect}</p>
        <p className="text-xs text-gray-600 mt-2">{content.extra}</p>
      </div>
    </section>
  );
}
