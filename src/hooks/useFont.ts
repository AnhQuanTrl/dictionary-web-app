import React from "react";
import { FontContext } from "../contexts/fontContext";

export const useFont = () => {
  const context = React.useContext(FontContext);
  if (context == null) {
    throw new Error("Cannot access FontContext outside its providers");
  }

  return context;
};
