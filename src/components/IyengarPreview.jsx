import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EN_IYENGAR, HI_IYENGAR, EN_FEEDBACKS, HI_FEEDBACKS } from '../yogaData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IyengarYoga() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const data = lang === 'en' ? EN_IYENGAR : HI_IYENGAR;
  const feedbacks = lang === 'en' ? EN_FEEDBACKS : HI_FEEDBACKS;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.iyengar-animate', {
        y: 50,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 1,
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
      id="iyengar"
      className="relative py-16 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="iyengar-animate text-3xl sm:text-4xl font-extrabold text-indigo-700 text-center mb-10">
          {lang === 'en' ? 'Iyengar Yoga' : 'आयंगर योग'}
        </h2>

        {/* About Iyengar Yoga */}
        <p className="iyengar-animate text-gray-700 text-base sm:text-lg leading-relaxed mb-8 text-center">
          {data.about}
        </p>

        {/* Founder Section */}
        <div className="iyengar-animate flex flex-col md:flex-row items-center gap-8 bg-gray-50 rounded-2xl p-6 shadow-lg mb-16">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bks_iyengar_2012.png/330px-Bks_iyengar_2012.png"
            alt="B.K.S Iyengar"
            className="w-40 h-40 object-cover rounded-full shadow-md"
          />
          <div>
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              {lang === 'en' ? 'B.K.S. Iyengar' : 'बी.के.एस. आयंगर'}
            </h3>
            <p className="text-gray-700 leading-relaxed">{data.founder}</p>
            <a
              href="https://en.wikipedia.org/wiki/B._K._S._Iyengar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-indigo-600 hover:underline text-sm"
            >
              {lang === 'en' ? 'Learn more on Wikipedia' : 'विकिपीडिया पर और पढ़ें'}
            </a>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="iyengar-animate">
          <h3 className="text-2xl font-semibold text-indigo-700 text-center mb-6">
            {lang === 'en' ? 'Testimonials' : 'प्रशंसापत्र'}
          </h3>
          <div className="flex overflow-x-auto space-x-6 snap-x scrollbar-hide">
            {feedbacks.map((fb, idx) => (
              <div
                key={idx}
                className="snap-center min-w-[250px] bg-indigo-50 rounded-xl shadow p-4 flex flex-col justify-between"
              >
                <p className="text-gray-700 italic mb-3">“{fb.text}”</p>
                <span className="text-sm font-bold text-indigo-600">— {fb.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute top-20 right-[-50px] w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-20 -z-10" />
    </section>
  );
}
