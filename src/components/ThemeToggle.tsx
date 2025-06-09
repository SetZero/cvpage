import React from "react";
import { useTheme } from "../context/Theme";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
      <span className="theme-toggle__icon">{theme === "dark" ? "☀️" : "🌙"}</span>
    </button>
  );
};