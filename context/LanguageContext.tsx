"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type LanguageCode =
  | "en"
  | "hi"
  | "gu"
  | "mr"
  | "bn"
  | "ta"
  | "te"
  | "kn"
  | "od"
  | "ml";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("sanatan-lang") as LanguageCode;
    if (
      savedLang &&
      ["en", "hi", "gu", "mr", "bn", "ta", "te", "kn", "od", "ml"].includes(
        savedLang,
      )
    ) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem("sanatan-lang", lang);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    return { language: "en" as LanguageCode, setLanguage: () => {} };
  }
  return context;
}
