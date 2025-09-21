import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EN_PRANAYAMA, HI_PRANAYAMA } from '../yogaData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PranayamaSection() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const data = lang === 'en' ? EN_PRANAYAMA : HI_PRANAYAMA;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pranayama-card', {
        y: 70,
        autoAlpha: 0,
        stagger: 0.25,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      id="pranayama"
      className="relative py-16 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 text-center mb-12">
          {lang === 'en' ? 'Pranayama' : 'प्राणायाम'}
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Pranayama */}
          <div className="pranayama-card bg-gray-50 rounded-2xl shadow-md p-6 text-left">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              {lang === 'en' ? 'About Pranayama' : 'प्राणायाम के बारे में'}
            </h3>
            <p className="text-gray-700 leading-relaxed">{data.about}</p>
            <a
              href="https://en.wikipedia.org/wiki/Pranayama"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-indigo-600 hover:underline text-sm"
            >
              {lang === 'en'
                ? 'Learn more on Wikipedia'
                : 'विकिपीडिया पर और पढ़ें'}
            </a>
          </div>

          {/* Nadis (Chandra & Surya) */}
          <div className="pranayama-card bg-gray-50 rounded-2xl shadow-md p-6 text-left">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              {lang === 'en' ? 'Nadis: Chandra & Surya' : 'नाड़ियाँ: चंद्र और सूर्य'}
            </h3>
            <p className="text-gray-700 leading-relaxed">{data.nadi}</p>
          </div>

          {/* Breathing Effects */}
          <div className="pranayama-card bg-gray-50 rounded-2xl shadow-md p-6 text-left">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              {lang === 'en'
                ? 'Effect of Breathing'
                : 'श्वास का प्रभाव'}
            </h3>
            <p className="text-gray-700 leading-relaxed">{data.effect}</p>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-[-40px] left-[-40px] w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-[-50px] right-[-60px] w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-20 -z-10" />
    </section>
  );
}
