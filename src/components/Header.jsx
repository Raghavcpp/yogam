import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { gsap } from 'gsap';

export default function Header() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'power3.out' },
      });

      tl.from(headlineRef.current, { y: 50, autoAlpha: 0 })
        .from(subRef.current, { y: 40, autoAlpha: 0 }, '-=0.4')
        .from(btnRef.current, { scale: 0.8, autoAlpha: 0, ease: 'back.out(1.7)' }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <header
      ref={sectionRef}
      id="home"
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 bg-gradient-to-b from-indigo-100 via-white to-white overflow-hidden"
    >
      <img src="/images/bg-fixed.png" alt="Yoga Header Background" className="fixed mx-auto my-auto w-auto height-auto  opacity-20" />
      {/* Decorative shapes */}
      {/* <div className="absolute top-10 left-[-40px] w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30" /> */}

      <h1
        ref={headlineRef}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-700 mb-6 leading-tight"
      >
        {lang === 'en'
          ? 'Balance Your Body & Mind with Anandam Yoga'
          : 'अपने शरीर और मन को संतुलित करें आनंदम योग के साथ'}
      </h1>

      <p
        ref={subRef}
        className="max-w-2xl text-lg sm:text-xl text-gray-700 mb-8"
      >
        {lang === 'en'
          ? 'Experience Iyengar therapy, Asanas, Pranayama, and Meditation for holistic wellness.'
          : 'समग्र स्वास्थ्य के लिए आयंगर थेरेपी, आसन, प्राणायाम और ध्यान का अनुभव करें।'}
      </p>

      <button
        ref={btnRef}
        onClick={() => window.open("https://wa.link/rbifou", "_blank")}
        className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold text-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300"
      >
        {lang === 'en' ? 'Join Now' : 'अभी जुड़ें'}
      </button>
    </header>
  );
}
