import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const SAMPLE_PRICES = {
  iyengar: { monthly: 1200, yearly: 12000 },
  pranayama: { monthly: 800, yearly: 8000 },
  asana: { monthly: 700, yearly: 7000 },
};

function formatINR(v) {
  return `₹${v.toLocaleString("en-IN")}`;
}

export default function Pricing() {
  const { lang } = useLanguage();
  const [period, setPeriod] = useState("monthly");

  return (
    <section id="pricing" className="px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-base font-semibold">
            {lang === "en" ? "Pricing" : "मूल्य"}
          </h4>
          <div className="flex items-center gap-2">
            <span className="text-xs">
              {lang === "en" ? "Monthly" : "महीना"}
            </span>
            <div className="p-1 bg-gray-100 rounded-full flex items-center gap-1">
              <button
                className={`px-3 py-1 rounded-full ${
                  period === "monthly" ? "bg-green-600 text-white" : ""
                }`}
                onClick={() => setPeriod("monthly")}
              >
                M
              </button>
              <button
                className={`px-3 py-1 rounded-full ${
                  period === "yearly" ? "bg-green-600 text-white" : ""
                }`}
                onClick={() => setPeriod("yearly")}
              >
                Y
              </button>
            </div>
            <span className="text-xs">
              {lang === "en" ? "Yearly" : "सालाना"}
            </span>
          </div>
        </div>

        <div className="grid gap-3">
          {Object.entries(SAMPLE_PRICES).map(([key, val]) => (
            <div key={key} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">
                    {key === "iyengar"
                      ? lang === "en"
                        ? "Iyengar Therapy"
                        : "आयंगर थेरेपी"
                      : key === "pranayama"
                      ? lang === "en"
                        ? "Pranayama Program"
                        : "प्राणायाम कार्यक्रम"
                      : lang === "en"
                      ? "Asana Classes"
                      : "आसन क्लास"}
                  </div>
                  <div className="text-xs text-gray-600">
                    {lang === "en"
                      ? "Monthly plan includes weekly classes"
                      : "मासिक योजना में साप्ताहिक कक्षाएँ शामिल हैं"}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">
                    {formatINR(period === "monthly" ? val.monthly : val.yearly)}
                  </div>
                  {period === "yearly" && (
                    <div className="text-xs text-green-600">
                      {lang === "en" ? "Save 20%" : "20% बचत"}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 px-3 py-2 rounded bg-green-600 text-white">
                  {lang === "en" ? "Subscribe" : "सदस्यता लें"}
                </button>
                <button className="px-3 py-2 rounded border">
                  {lang === "en" ? "More" : "और"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
