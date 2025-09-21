import React, { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'anandam-lang';
const VALID_LANGS = ['en', 'hi'];

const LanguageContext = createContext(null);

/**
 * LanguageProvider
 * Wrap your app with this provider in main.jsx / main.tsx
 */
export function LanguageProvider({ children, defaultLang = 'en' }) {
  const [lang, setLang] = useState(() => {
    try {
      if (typeof window === 'undefined') return defaultLang;
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && VALID_LANGS.includes(saved)) return saved;
      // optional: try browser preference (if you want)
      const nav = (navigator?.language || navigator?.userLanguage || '').slice(0, 2);
      if (VALID_LANGS.includes(nav)) return nav;
      return defaultLang;
    } catch (e) {
      return defaultLang;
    }
  });

  // persist and update <html lang=...> for accessibility / SEO
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore storage errors (private mode) */
    }
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = lang;
      // Hindi uses LTR script (Devanagari), so dir stays 'ltr'.
      document.documentElement.dir = 'ltr';
    }
  }, [lang]);

  const setLanguage = (l) => {
    if (!VALID_LANGS.includes(l)) return;
    setLang(l);
  };

  const toggleLanguage = () => setLang((s) => (s === 'en' ? 'hi' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * useLanguage()
 * Consume this hook in any component:
 * const { lang, setLanguage, toggleLanguage } = useLanguage();
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return ctx;
}
