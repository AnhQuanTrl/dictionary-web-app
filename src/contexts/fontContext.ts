import React from "react";
import { FontFamily } from "../types/fontFamily";

export interface FontContextType {
  font: FontFamily;
  setFont: (font: FontFamily) => void;
}

export const FontContext = React.createContext<FontContextType | null>(null);
