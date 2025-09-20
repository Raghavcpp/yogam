import React, { useRef } from "react";
import * as Y from "../yogaData";
import { useLanguage } from "../context/LanguageContext";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const { lang } = useLanguage();
  const feedbacks = lang === "en" ? Y.EN_FEEDBACKS : Y.HI_FEEDBACKS;
  const scRef = useRef(null);

  const next = () => {
    if (!scRef.current) return;
    scRef.current.scrollBy({
      left: scRef.current.clientWidth,
      behavior: "smooth",
    });
  };
  const prev = () => {
    if (!scRef.current) return;
    scRef.current.scrollBy({
      left: -scRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" className="px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h4 className="text-base font-semibold mb-3">
          {lang === "en" ? "Testimonials" : "प्रशंसापत्र"}
        </h4>
        <div
          ref={scRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {feedbacks.map((f, i) => (
            <article
              key={i}
              className="min-w-[80%] snap-center bg-white p-4 rounded-lg shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold">
                  {f.name.charAt(0)}
                </div>
                <div className="text-sm font-semibold">{f.name}</div>
              </div>
              <p className="text-sm leading-relaxed">
                <FaQuoteLeft className="inline-block mr-2 text-green-600" />
                {f.feedback}
              </p>
            </article>
          ))}
        </div>
        <div className="flex gap-3 mt-3 justify-center">
          <button onClick={prev} className="px-3 py-2 border rounded">
            {lang === "en" ? "Prev" : "पहले"}
          </button>
          <button
            onClick={next}
            className="px-3 py-2 bg-green-600 text-white rounded"
          >
            {lang === "en" ? "Next" : "अगला"}
          </button>
        </div>
      </div>
    </section>
  );
}
