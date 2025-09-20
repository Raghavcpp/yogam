import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("anandam-lang") || "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem("anandam-lang", lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const setLanguage = (l) => {
    if (l !== "en" && l !== "hi") return;
    setLang(l);
  };

  const toggleLanguage = () => setLang((l) => (l === "en" ? "hi" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
