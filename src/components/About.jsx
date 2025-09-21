import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { EN_ABOUT_US, HI_ABOUT_US } from "../yogaData";
import { gsap } from "gsap";

export default function AboutUs() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);

  const data = lang === "en" ? EN_ABOUT_US : HI_ABOUT_US;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-card", {
        y: 50,
        autoAlpha: 0,
        stagger: 0.2,
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
      id="about"
      className="relative py-16 px-6 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-4">
          {lang === "en" ? "About Us" : "हमारे बारे में"}
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          {data.organization}
        </p>
      </div>

      <div className="relative -left-6 mx-auto grid grid-cols-2 md:grid-cols-4 justify-items-center gap-4 text-center w-screen">
        <img effect="blur" src="900 x 1284/h2-img1.jpg" alt="h2-img1.png"  data-aos="fade-right" className="rounded-tl-full max-h-100" />
        <img effect="blur" src="900 x 1284/h2-img2.jpg" alt="h2-img2.png"  data-aos="fade-up" className="rounded-tr-full md:rounded-t-full max-h-100" />
        <img effect="blur" src="900 x 1284/h2-img3.jpg" alt="h2-img3.png"  data-aos="fade-up" className="rounded-bl-full md:rounded-bl-none md:rounded-t-full max-h-100" />
        <img effect="blur" src="900 x 1284/h2-img4.jpg" alt="h2-img4.png"  data-aos="fade-left" className="rounded-br-full md:rounded-br-none md:rounded-tr-full max-h-100" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-20">
        {/* Organization card */}
        <div className="about-card bg-white rounded-2xl shadow-lg p-6 text-left">
          <h3 className="text-xl font-bold text-indigo-600 mb-3">
            {lang === "en" ? "Anandam Yoga" : "आनंदम योग"}
          </h3>
          <p className="text-gray-700 leading-relaxed">{data.organization}</p>
        </div>

        {/* Instructor card */}
        <div className="about-card bg-white rounded-2xl shadow-lg p-6 text-left">
          <h3 className="text-xl font-bold text-indigo-600 mb-3">
            {lang === "en" ? "Instructor" : "प्रशिक्षक"}
          </h3>
          <p className="text-gray-700 leading-relaxed">{data.instructor}</p>
        </div>
      </div>

      {/* Decorative gradient background */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-30 -z-10" /> */}
    </section>
  );
}
