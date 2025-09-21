import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import * as Y from '../yogaData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IyengarSection() {
  const { lang } = useLanguage();
  const data = lang === 'en' ? Y.EN_IYENGAR : Y.HI_IYENGAR;

  // refs for animation
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // fade-in from bottom
      gsap.from(titleRef.current, {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from(textRefs.current, {
        y: 40,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-indigo-50 to-white text-gray-800 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl font-extrabold mb-6 text-indigo-700"
        >
          {lang === 'en' ? 'Iyengar Yoga' : 'आयंगर योग'}
        </h2>

        <p
          ref={(el) => (textRefs.current[0] = el)}
          className="text-base sm:text-lg leading-relaxed mb-6 text-gray-700"
        >
          {data.about}
        </p>

        <h3
          ref={(el) => (textRefs.current[1] = el)}
          className="text-2xl font-semibold mb-3 text-indigo-600"
        >
          {lang === 'en' ? 'Founder' : 'संस्थापक'}
        </h3>
        <img
          src="/images/founder.jpg"
          alt={data.founder}
          className="mx-auto w-30 h-auto rounded-full mb-4"
        />
        <p
          ref={(el) => (textRefs.current[2] = el)}
          className="text-base sm:text-lg leading-relaxed text-gray-700"
        >
          {data.founder}
        </p>
      </div>

      {/* subtle background decoration */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full blur-2xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-100 rounded-full blur-2xl opacity-40" />
    </section>
  );
}
