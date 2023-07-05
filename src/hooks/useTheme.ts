import React from "react";
import { ThemeContext } from "../contexts/themeContext";

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context == null) {
    throw new Error("Cannot access ThemeContext outside its providers");
  }

  return context;
};
