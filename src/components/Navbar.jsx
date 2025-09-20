import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { ensureGsap } from "../gsapUtils";

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const gsap = ensureGsap();
    if (!menuRef.current) return;
    if (open) {
      gsap.fromTo(
        menuRef.current.children,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.25 }
      );
    }
  }, [open]);

  // mobile link list
  const links = [
    { id: "home", label: lang === "en" ? "Home" : "होम" },
    { id: "about", label: lang === "en" ? "About" : "हमारे बारे में" },
    { id: "iyengar", label: lang === "en" ? "Iyengar" : "आयंगर" },
    { id: "asanas", label: lang === "en" ? "Asanas" : "आसन" },
    { id: "pranayama", label: lang === "en" ? "Pranayama" : "प्राणायाम" },
    { id: "meditation", label: lang === "en" ? "Meditation" : "ध्यान" },
    { id: "pricing", label: lang === "en" ? "Pricing" : "मूल्य" },
    {
      id: "testimonials",
      label: lang === "en" ? "Testimonials" : "प्रशंसापत्र",
    },
    { id: "gallery", label: lang === "en" ? "Gallery" : "गैलरी" },
  ];
  const onLinkClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center text-white font-bold">
            AY
          </div>
          <span className="sr-only">Anandam Yoga</span>
          <span className="text-sm font-semibold">Anandam</span>
        </div>

        {/* Center: links (hidden on very small screens) */}
        <div className="hidden sm:flex gap-4">
          {links.slice(0, 5).map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => onLinkClick(e, l.id)}
              className="text-sm hover:text-green-600"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right: language toggle + mobile menu button */}
        <div className="flex items-center gap-3">
          <button
            aria-label="toggle language"
            onClick={() => {
              const gsap = ensureGsap();
              gsap.fromTo(
                "#lang-btn",
                { scale: 0.95 },
                { scale: 1.05, duration: 0.12, yoyo: true, repeat: 1 }
              );
              toggleLanguage();
            }}
            id="lang-btn"
            className="text-xs px-2 py-1 rounded-full border"
          >
            {lang === "en" ? "EN" : "HI"}
          </button>

          <button
            className="sm:hidden p-2"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="nav-mobile"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="nav-mobile" className="sm:hidden border-t border-gray-100">
          <div ref={menuRef} className="flex flex-col px-4 py-3 gap-3">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => onLinkClick(e, l.id)}
                className="py-2 text-base rounded-md"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
