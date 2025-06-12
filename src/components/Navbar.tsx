import React from "react";
import { useTheme } from "../context/Theme";
import { navLinks } from "../data/experience";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav__container">
        <a href="/" className="nav__logo" aria-label="Homepage">Sebastian Dauenhauer</a>
        <div className="nav__menu">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle dark mode"
            type="button"
            onClick={toggleTheme}
          >
            <span className="theme-toggle__icon" aria-hidden="true">
              {theme === "dark" ? "☀️" : "🌙"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;