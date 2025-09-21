import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EN_MEDITATION, HI_MEDITATION } from '../yogaData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MeditationSection() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const data = lang === 'en' ? EN_MEDITATION : HI_MEDITATION;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.meditate-animate', {
        y: 40,
        autoAlpha: 0,
        scale: 0.95,
        stagger: 0.3,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      id="meditation"
      className="relative py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="meditate-animate text-3xl sm:text-4xl font-serif font-extrabold text-indigo-700 mb-6">
          {lang === 'en' ? 'Meditation' : 'ध्यान'}
        </h2>

        {/* Main description */}
        <p className="meditate-animate text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          {data.connect}
        </p>

        {/* Additional point */}
        <p className="meditate-animate text-gray-700 text-base sm:text-lg leading-relaxed font-sans">
          {data.extra}
        </p>

        {/* Wikipedia link */}
        <a
          href="https://en.wikipedia.org/wiki/Meditation"
          target="_blank"
          rel="noopener noreferrer"
          className="meditate-animate inline-block mt-6 text-indigo-600 hover:underline text-sm font-medium"
        >
          {lang === 'en'
            ? 'Learn more on Wikipedia'
            : 'विकिपीडिया पर और पढ़ें'}
        </a>
      </div>

      {/* Decorative blurred background */}
      <div className="absolute top-10 left-[-50px] w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-25 -z-10" />
      <div className="absolute bottom-[-60px] right-[-50px] w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-25 -z-10" />
    </section>
  );
}
