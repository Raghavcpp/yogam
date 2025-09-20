import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="px-4 py-6 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-3">
          <a aria-label="Instagram" href="#">
            <FaInstagram size={18} />
          </a>
          <a aria-label="Facebook" href="#">
            <FaFacebook size={18} />
          </a>
          <a aria-label="YouTube" href="#">
            <FaYoutube size={18} />
          </a>
          <a aria-label="WhatsApp" href="#">
            <FaWhatsapp size={18} />
          </a>
        </div>
        <div className="text-xs text-gray-600">
          contact@anandam.example • +91 90000 00000
        </div>
        <div className="text-xs text-gray-500 mt-2">
          © {new Date().getFullYear()} Anandam Yoga
        </div>
      </div>
    </footer>
  );
}
