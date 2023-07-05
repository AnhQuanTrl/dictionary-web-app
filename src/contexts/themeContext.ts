import React from "react";
import { Theme } from "../types/theme";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null);
