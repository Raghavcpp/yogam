import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { EN_ASANA, HI_ASANA } from "../yogaData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AsanaSection() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const data = lang === "en" ? EN_ASANA : HI_ASANA;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".asana-card", {
        y: 60,
        autoAlpha: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      id="asana"
      className="relative py-16 px-6 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black-700 text-center mb-12">
          {lang === "en" ? "Asanas & Alignment" : "आसन और शारीरिक संतुलन"}
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* How Asanas Work */}
          <div className="asana-card bg-white rounded-2xl shadow-lg p-6 text-left">
            <h3 className="text-xl font-semibold text-black-600 mb-3">
              {lang === "en" ? "How Asanas Work" : "आसन कैसे काम करते हैं"}
            </h3>
            <p className="text-gray-700 leading-relaxed">{data.howItWorks}</p>
            <a
              href="https://en.wikipedia.org/wiki/Asana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-black-600 hover:underline text-sm"
            >
              {lang === "en"
                ? "Learn more on Wikipedia"
                : "विकिपीडिया पर और पढ़ें"}
            </a>
          </div>

          {/* Why Alignment Matters */}
          <div className="asana-card bg-white rounded-2xl shadow-lg p-6 text-left">
            <h3 className="text-xl font-semibold text-black-600 mb-3">
              {lang === "en"
                ? "Why Alignment Matters"
                : "संतुलन क्यों ज़रूरी है"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {data.alignment}
            </p>
            <a
              href="https://www.yogaalignmentguide.com/blog/what-is-yoga-alignment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-black-600 hover:underline text-sm"
            >
              {lang === "en"
                ? "Learn more on Yoga Alignment Guide"
                : "योग संरेखण गाइड पर और पढ़ें"}
            </a>
          </div>
        </div>
      </div>

      

      {/* Decorative blobs */}
      {/* <div className="absolute top-10 left-[-60px] w-72 h-72 bg-black-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-[-60px] right-[-40px] w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-20 -z-10" /> */}
    </section>
  );
}
