import React, { useState } from "react";

// Example: call <Gallery images={["/img1.jpg","/img2.jpg"]} />
export default function Gallery({ images = [] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };

  return (
    <section id="gallery" className="px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h4 className="text-base font-semibold mb-3">Gallery</h4>
        <div className="grid grid-cols-2 gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => openAt(i)}
              className="aspect-[4/5] overflow-hidden rounded"
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* modal */}
        {open && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <img
              src={images[idx]}
              alt={`full-${idx}`}
              className="max-h-[80vh] max-w-full rounded shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
