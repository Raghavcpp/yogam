import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { gsap } from 'gsap';

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();
  const navRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // fade down navbar
      gsap.from(navRef.current, {
        y: -80,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // stagger links
      gsap.from(linksRef.current, {
        y: -20,
        autoAlpha: 0,
        stagger: 0.1,
        delay: 0.5,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const sections = [
    { id: 'about', en: 'About', hi: 'हमारे बारे में' },
    { id: 'iyengar', en: 'Iyengar', hi: 'आयंगर' },
    { id: 'asana', en: 'Asana', hi: 'आसन' },
    { id: 'pranayama', en: 'Pranayama', hi: 'प्राणायाम' },
    { id: 'meditation', en: 'Meditation', hi: 'ध्यान' },
    { id: 'pricing', en: 'Pricing', hi: 'शुल्क' },
    { id: 'gallery', en: 'Gallery', hi: 'गैलरी' },
    { id: 'testimonials', en: 'Testimonials', hi: 'प्रशंसापत्र' },
    { id: 'contact', en: 'Contact', hi: 'संपर्क' },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-lg sm:text-xl font-bold text-indigo-700">
            Anandam Yoga
          </div>

          {/* Center Links (hidden on small, visible on md+) */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            {sections.map((sec, i) => (
              <li key={sec.id}>
                <a
                  ref={(el) => (linksRef.current[i] = el)}
                  href={`#${sec.id}`}
                  className="hover:text-indigo-600 transition-colors duration-300"
                >
                  {lang === 'en' ? sec.en : sec.hi}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors duration-300"
          >
            {lang === 'en' ? 'हिंदी' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
}
