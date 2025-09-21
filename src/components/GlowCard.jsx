import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  return (
    <div
      className="rounded-xl p-10 mb-5"
    >
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="text-yellow-500">⭐</span>
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
