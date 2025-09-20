import React from "react";
import * as Y from "../yogaData";
import { useLanguage } from "../context/LanguageContext";

export default function AsanaPranayama() {
  const { lang } = useLanguage();
  const asana = lang === "en" ? Y.EN_ASANA : Y.HI_ASANA;
  const pran = lang === "en" ? Y.EN_PRANAYAMA : Y.HI_PRANAYAMA;

  return (
    <section id="asanas" className="px-4 py-6">
      <div className="max-w-2xl mx-auto grid gap-3">
        <div className="bg-white p-4 rounded-lg shadow">
          <h5 className="font-semibold mb-1">
            {lang === "en" ? "Asana & Alignment" : "आसन और एलाइनमेंट"}
          </h5>
          <p className="text-sm">{asana.howItWorks}</p>
          <p className="text-xs text-gray-600 mt-2">{asana.alignment}</p>
          <a
            href="https://en.wikipedia.org/wiki/Asana"
            target="_blank"
            rel="noreferrer"
            className="text-sm underline mt-2 inline-block"
          >
            {lang === "en" ? "Learn more" : "और जानें"}
          </a>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h5 className="font-semibold mb-1">
            {lang === "en" ? "Pranayama" : "प्राणायाम"}
          </h5>
          <p className="text-sm">{pran.about}</p>
          <p className="text-xs text-gray-600 mt-2">{pran.nadi}</p>
          <a
            href="https://en.wikipedia.org/wiki/Pranayama"
            target="_blank"
            rel="noreferrer"
            className="text-sm underline mt-2 inline-block"
          >
            {lang === "en" ? "Learn more" : "और जानें"}
          </a>
        </div>
      </div>
    </section>
  );
}
