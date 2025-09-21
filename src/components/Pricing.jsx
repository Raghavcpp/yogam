import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EN_PRICING, HI_PRICING } from '../yogaData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PricingSection() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const data = lang === 'en' ? EN_PRICING : HI_PRICING;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        y: 60,
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

      // Optional hover scale animation
      gsap.utils.toArray('.pricing-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-16 px-6 bg-indigo-50"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-4">
          {lang === 'en' ? 'Pricing' : 'शुल्क'}
        </h2>
        <p className="text-gray-700 text-base sm:text-lg">
          {lang === 'en'
            ? 'Choose the right plan for your wellness journey.'
            : 'अपने स्वास्थ्य यात्रा के लिए सही योजना चुनें।'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {Object.keys(data).map((key, idx) => (
          <div
            key={idx}
            className="pricing-card bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              {data[key].title}
            </h3>
            <p className="text-gray-700 mb-3">{data[key].description}</p>
            <div className="flex justify-center gap-4 mt-4">
              <span className="bg-indigo-100 text-indigo-800 font-bold px-3 py-1 rounded-full">
                {data[key].monthly}
              </span>
              <span className="bg-indigo-600 text-white font-bold px-3 py-1 rounded-full">
                {data[key].yearly}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-[-50px] left-[-40px] w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-[-60px] right-[-50px] w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-20 -z-10" />
    </section>
  );
}
