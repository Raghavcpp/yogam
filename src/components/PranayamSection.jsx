import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { EN_PRANAYAMA, HI_PRANAYAMA } from "../yogaData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PranayamaSection() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const data = lang === "en" ? EN_PRANAYAMA : HI_PRANAYAMA;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pranayama-card", {
        y: 70,
        autoAlpha: 0,
        stagger: 0.25,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      gsap.fromTo(
        ".chakra-bg",
        { rotation: 0 },
        {
          rotation: 360,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",   // section enters viewport
            end: "bottom top",     // until section leaves
            scrub: true,           // tie animation to scroll
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      id="pranayama"
      className="relative py-16 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black-700 text-center mb-12">
          {lang === "en" ? "Pranayama" : "प्राणायाम"}
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Pranayama */}
          <div className="pranayama-card bg-gray-50 rounded-2xl shadow-md p-6 text-left">
            <h3 className="text-lg font-semibold text-black-600 mb-2">
              {lang === "en" ? "About Pranayama" : "प्राणायाम के बारे में"}
            </h3>
            <p className="text-gray-700 leading-relaxed">{data.about}</p>
            <a
              href="https://en.wikipedia.org/wiki/Pranayama"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-black-600 hover:underline text-sm"
            >
              {lang === "en"
                ? "Learn more on Wikipedia"
                : "विकिपीडिया पर और पढ़ें"}
            </a>
          </div>

          {/* Nadis (Chandra & Surya) */}
          <div className="pranayama-card bg-gray-50 rounded-2xl shadow-md p-6 text-left">
            <h3 className="text-lg font-semibold text-black-600 mb-2">
              {lang === "en"
                ? "Nadis: Chandra & Surya"
                : "नाड़ियाँ: चंद्र और सूर्य"}
            </h3>
            <p className="text-gray-700 leading-relaxed">{data.nadi}</p>
            <a
              href="https://en.wikipedia.org/wiki/Nadi_(yoga)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-black-600 hover:underline text-sm"
            >
              {lang === "en"
                ? "Learn more on Wikipedia"
                : "विकिपीडिया पर और पढ़ें"}
            </a>
          </div>

          {/* Breathing Effects */}
          <div className="pranayama-card bg-gray-50 rounded-2xl shadow-md p-6 text-left">
            <h3 className="text-lg font-semibold text-black-600 mb-2">
              {lang === "en" ? "Effect of Breathing" : "श्वास का प्रभाव"}
            </h3>
            <p className="text-gray-700 leading-relaxed">{data.effect}</p>
            <a
              href="https://www.medicalnewstoday.com/articles/what-is-yogic-breathing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-black-600 hover:underline text-sm"
            >
              {lang === "en"
                ? "Learn more on Medical News Today"
                : "मेडिकल न्यूज़ टुडे पर और पढ़ें"}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      {/* <div className="absolute top-[-40px] left-[-40px] w-72 h-72 bg-black-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-[-50px] right-[-60px] w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-20 -z-10" /> */}
         
      {/* Decorative blobs */}
      {/* <div className="absolute top-[-40px] left-[-40px] w-72 h-72 bg-black-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-[-50px] right-[-60px] w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-20 -z-10" /> */}
      <img className="chakra-bg absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto scale-200 z-1 opacity-50" src="/images/chakra.png" alt="chakra" />
      {/* <img className="chakra-bg absolute bottom-0 left-2/1 transform -translate-x-1/2 w-auto scale-200 z-1 opacity-50" src="/images/chakra.png" alt="chakra" /> */}
    </section>
  );
}
