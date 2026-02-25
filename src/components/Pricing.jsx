import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { EN_PRICING, HI_PRICING } from "../yogaData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const plans = lang === "en" ? EN_PRICING : HI_PRICING;
  const [billing, setBilling] = useState("monthly"); // "monthly" | "yearly"

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pricing-card", {
        y: 60,
        autoAlpha: 0,
        stagger: 0.18,
        duration: 0.9,
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
      id="pricing"
      className="relative py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
            {lang === "en" ? "Simple, Honest Pricing" : "सरल, पारदर्शी शुल्क"}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            {lang === "en"
              ? "No hidden fees. Choose the plan that suits your practice."
              : "कोई छिपा हुआ शुल्क नहीं। अपनी साधना के अनुसार योजना चुनें।"}
          </p>
        </div>

        {/* ── Billing Toggle ── */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 text-sm font-semibold">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                billing === "monthly"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {lang === "en" ? "Monthly" : "मासिक"}
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                billing === "yearly"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {lang === "en" ? "Yearly" : "वार्षिक"}
              <span className="ml-1.5 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold">
                {lang === "en" ? "Save ~15%" : "~15% बचत"}
              </span>
            </button>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card relative rounded-2xl p-7 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "bg-indigo-600 text-white shadow-2xl ring-4 ring-indigo-300 scale-[1.03]"
                  : "bg-white text-gray-800 shadow-lg"
              }`}
            >
              {/* Badge */}
              <span
                className={`inline-block text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-4 w-fit ${
                  plan.highlight
                    ? "bg-white/20 text-white"
                    : "bg-indigo-50 text-indigo-600"
                }`}
              >
                {plan.badge}
              </span>

              <h3
                className={`text-xl font-extrabold mb-1 ${
                  plan.highlight ? "text-white" : "text-gray-800"
                }`}
              >
                {plan.title}
              </h3>

              <p
                className={`text-sm mb-6 ${
                  plan.highlight ? "text-indigo-100" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-4xl font-black ${
                    plan.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {billing === "monthly" ? plan.monthly : plan.yearly}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    plan.highlight ? "text-indigo-200" : "text-gray-400"
                  }`}
                >
                  {billing === "monthly"
                    ? lang === "en"
                      ? "/month"
                      : "/माह"
                    : lang === "en"
                    ? "/year"
                    : "/वर्ष"}
                </span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-2.5 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <span
                      className={`mt-0.5 text-base ${
                        plan.highlight ? "text-green-300" : "text-green-500"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={
                        plan.highlight ? "text-indigo-100" : "text-gray-600"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => window.open("https://wa.link/rbifou", "_blank")}
                className={`w-full py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-indigo-50 shadow"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 shadow"
                }`}
              >
                {lang === "en" ? "Get Started on WhatsApp" : "व्हाट्सएप पर शुरू करें"}
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-gray-400 mt-8">
          {lang === "en"
            ? "All plans include a free trial class. No lock-in contracts."
            : "सभी योजनाओं में एक निःशुल्क परीक्षण कक्षा शामिल है। कोई लॉक-इन अनुबंध नहीं।"}
        </p>
      </div>
    </section>
  );
}