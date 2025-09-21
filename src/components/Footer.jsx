import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { gsap } from 'gsap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const { lang } = useLanguage();
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        y: 50,
        autoAlpha: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <footer
      ref={footerRef}
      className="relative bg-indigo-700 text-white py-12 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          {lang === 'en' ? 'Connect with us' : 'हमसे जुड़ें'}
        </h3>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mb-6 text-white text-lg">
          <a href="#" aria-label="Facebook" className="hover:text-pink-300 transition-colors duration-300">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-300 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-pink-300 transition-colors duration-300">
            <FaTwitter />
          </a>
        </div>

        {/* Contact Info */}
        <p className="text-sm sm:text-base mb-2">
          {lang === 'en'
            ? 'Email: info@anandamyoga.com | Phone: +91 98765 43210'
            : 'ईमेल: info@anandamyoga.com | फ़ोन: +91 98765 43210'}
        </p>
        <p className="text-sm sm:text-base">
          {lang === 'en'
            ? '© 2025 Anandam Yoga. All rights reserved.'
            : '© 2025 आनंदम योग। सर्वाधिकार सुरक्षित।'}
        </p>
      </div>

      {/* Decorative background */}
      <div className="absolute top-[-40px] left-[-40px] w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-[-50px] right-[-50px] w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20 -z-10" />
    </footer>
  );
}
