import React, { useEffect, useRef } from "react";
import * as Y from "../yogaData";
import { useLanguage } from "../context/LanguageContext";
import { ensureGsap } from "../gsapUtils";

export default function About() {
  const { lang } = useLanguage();
  const content = lang === "en" ? Y.EN_ABOUT_US : Y.HI_ABOUT_US;
  const ref = useRef();

  useEffect(() => {
    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { y: 10, opacity: 0, duration: 0.6 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="px-4 py-6">
      <div className="max-w-2xl mx-auto grid gap-4">
        <div className="bg-white shadow p-4 rounded-lg">
          <h4 className="text-sm font-semibold mb-2">
            {lang === "en" ? "About Anandam Yoga" : "आनंदम योग के बारे में"}
          </h4>
          <p className="text-sm leading-relaxed">{content.organization}</p>
        </div>

        <div className="bg-white shadow p-4 rounded-lg flex gap-3 items-center">
          <img
            src="https://i.pravatar.cc/120?img=32"
            alt="Yashkant Govind"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="text-sm font-semibold">Yashkant Govind</div>
            <div className="text-xs text-gray-600">
              {lang === "en" ? "Lead Instructor" : "मुख्य प्रशिक्षक"}
            </div>
            <p className="text-xs mt-2">{content.instructor}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
