import { createContext, useContext } from "react";

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export type Theme = "light" | "dark";

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};