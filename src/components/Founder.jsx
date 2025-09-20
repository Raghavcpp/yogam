import React from "react";
import { useLanguage } from "../context/LanguageContext";
import * as Y from "../yogaData";

export default function Founder() {
  const { lang } = useLanguage();
  const content = lang === "en" ? Y.EN_IYENGAR : Y.HI_IYENGAR;
  const img =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/B._K._S._Iyengar.jpg/330px-B._K._S._Iyengar.jpg";
  const wiki = "https://en.wikipedia.org/wiki/B._K._S._Iyengar";

  return (
    <section id="founder" className="px-4 py-6">
      <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow flex gap-3">
        <img
          src={img}
          alt="B. K. S. Iyengar"
          loading="lazy"
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h5 className="font-semibold">B. K. S. Iyengar</h5>
          <p className="text-sm leading-relaxed">{content.founder}</p>
          <a
            className="text-sm underline mt-2 inline-block"
            href={wiki}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang === "en" ? "More on Wikipedia" : "विकिपीडिया पर और पढ़ें"}
          </a>
        </div>
      </div>
    </section>
  );
}
