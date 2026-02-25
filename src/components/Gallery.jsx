import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { EN_GALLERY, HI_GALLERY } from "../yogaData";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const items = lang === "en" ? EN_GALLERY : HI_GALLERY;

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        scale: 0.88,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Heading ── */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
            {lang === "en" ? "Gallery" : "गैलरी"}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            {lang === "en"
              ? "A glimpse into our studio, sessions, and community."
              : "हमारे स्टूडियो, सत्रों और समुदाय की एक झलक।"}
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="gallery-item group relative overflow-hidden rounded-2xl cursor-pointer aspect-square bg-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => { setIndex(i); setOpen(true); }}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-semibold leading-snug">
                  {item.caption}
                </p>
              </div>
              {/* Expand icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-700 text-sm">
                ⛶
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={items.map((item) => ({ src: item.src, title: item.caption }))}
      />
    </section>
  );
}