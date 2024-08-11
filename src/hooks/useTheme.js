import { useEffect, useState } from "react";

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const switchTheme = () => setIsDarkMode((prev) => !prev);

  return { isDarkMode, switchTheme };
}
