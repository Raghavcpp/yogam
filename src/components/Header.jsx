import React, { useEffect, useRef } from "react";
import * as Y from "../yogaData";
import { useLanguage } from "../context/LanguageContext";
import { ensureGsap } from "../gsapUtils";

export default function Header() {
  const { lang } = useLanguage();
  const tagline =
    lang === "en" ? Y.EN_ABOUT_US.organization : Y.HI_ABOUT_US.organization;
  const ref = useRef();

  useEffect(() => {
    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { y: 10, opacity: 0, duration: 0.6 });
      gsap.from(".hero-cta", { y: 6, opacity: 0, stagger: 0.08, delay: 0.12 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <header id="home" ref={ref} className="px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-block p-3 rounded-full bg-green-100 mb-3">
          🕉️
        </div>
        <h1 className="hero-title text-2xl font-bold mb-2">Anandam Yoga</h1>
        <p className="text-sm leading-relaxed text-gray-700 mb-4">{tagline}</p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="#pricing"
            className="hero-cta px-4 py-2 rounded-md bg-green-600 text-white text-sm"
          >
            {lang === "en" ? "Join Now" : "शामिल हों"}
          </a>
          <a
            href="#about"
            className="hero-cta px-3 py-2 rounded-md border text-sm"
          >
            {lang === "en" ? "Learn More" : "और जानें"}
          </a>
        </div>
      </div>
    </header>
  );
}
