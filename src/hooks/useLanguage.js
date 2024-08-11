import { useState, useEffect } from "react";

export function useLanguage() {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const switchLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "fr" : "en"));
  };

  return { language, switchLanguage };
}
