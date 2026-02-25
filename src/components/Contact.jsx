import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { EN_CONTACT, HI_CONTACT } from "../yogaData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
//  EmailJS config — sign up free at emailjs.com
//  then replace these three values:
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_x3u2srq";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_cmbt9xv";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "1RBrbNS9CIFKA2Zqf";   // e.g. "aBcDeFgHiJkLmNoP"

export default function Contact() {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const data = lang === "en" ? EN_CONTACT : HI_CONTACT;

  const [form, setForm]     = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent" | "error"

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-animate", {
        y: 50,
        autoAlpha: 0,
        stagger: 0.15,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Sends to yogaaanandam@gmail.com via EmailJS
      // Your EmailJS template should use these variables:
      //   {{from_name}}  — client's name
      //   {{phone}}      — client's phone number
      //   {{message}}    — client's message
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          phone:     form.phone,
          message:   form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  // ── Info cards (no address) ──────────────────
  const INFO = [
    {
      icon: "📞",
      label: lang === "en" ? "Phone / WhatsApp" : "फ़ोन / व्हाट्सएप",
      value: data.phone,
      href: `tel:${data.phone}`,
    },
    {
      icon: "✉️",
      label: lang === "en" ? "Email" : "ईमेल",
      value: data.email,
      href: `mailto:${data.email}`,
    },
    {
      icon: "🕐",
      label: lang === "en" ? "Session Timings" : "सत्र समय",
      value: data.timings,
    },
  ];

  const btnLabel = {
    idle:    lang === "en" ? "Send Enquiry →"        : "पूछताछ भेजें →",
    sending: lang === "en" ? "Sending…"              : "भेजा जा रहा है…",
    sent:    lang === "en" ? "✓ Message Sent!"        : "✓ संदेश भेजा गया!",
    error:   lang === "en" ? "Failed — try WhatsApp" : "विफल — व्हाट्सएप आज़माएँ",
  }[status];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Heading ── */}
        <div className="contact-animate text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
            {data.heading}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            {data.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* ── Info Cards + WhatsApp CTA ── */}
          <div className="contact-animate space-y-5">
            {INFO.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 shadow-sm"
              >
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-700 font-medium hover:text-indigo-600 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <button
              onClick={() => window.open(data.whatsapp, "_blank")}
              className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-colors duration-300 text-base shadow-lg"
            >
              <span className="text-xl">💬</span>
              {lang === "en"
                ? "Chat with me on WhatsApp"
                : "व्हाट्सएप पर मुझसे चैट करें"}
            </button>
          </div>

          {/* ── Enquiry Form (sends email via EmailJS) ── */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-animate bg-white rounded-2xl shadow-lg p-7 border border-gray-100 space-y-5"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              {lang === "en" ? "Send an Enquiry" : "पूछताछ भेजें"}
            </h3>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                {lang === "en" ? "Your Name" : "आपका नाम"}
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={lang === "en" ? "Ravi Kumar" : "रवि कुमार"}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                {lang === "en" ? "Phone Number" : "फ़ोन नंबर"}
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                {lang === "en" ? "Message" : "संदेश"}
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={
                  lang === "en"
                    ? "I'd like to know more about personal sessions…"
                    : "मैं व्यक्तिगत सत्रों के बारे में अधिक जानना चाहता/चाहती हूँ…"
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full font-bold py-3.5 rounded-xl transition-all duration-300 text-sm shadow ${
                status === "sent"
                  ? "bg-green-500 text-white"
                  : status === "error"
                  ? "bg-red-500 text-white"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-60"
              }`}
            >
              {btnLabel}
            </button>

            <p className="text-xs text-gray-400 text-center">
              {lang === "en"
                ? "Your enquiry will be emailed directly to Yashkant."
                : "आपकी पूछताछ सीधे यशकांत को ईमेल की जाएगी।"}
            </p>
          </form>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-10 right-[-50px] w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-[-40px] left-[-40px] w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-30 -z-10" />
    </section>
  );
}