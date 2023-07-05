import defaultTheme from "tailwindcss/defaultTheme";
import formPlugin from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        "base-mobile": ["0.9375rem", "1.5rem"],
        lg: ["1.125rem", "1.5rem"],
        xl: ["1.25rem", "1.5rem"],
        "2xl": ["1.5rem", "1.8rem"],
        "3xl": ["2rem", "2.4rem"],
        "6xl": ["4rem", "4.8rem"],
      },
      boxShadow: {
        DEFAULT: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        mono: ["Inconsolata", ...defaultTheme.fontFamily.mono],
      },
    },
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      white: "#ffffff",
      neutral: {
        300: "#f4f4f4",
        400: "#e9e9e9",
        500: "#757575",
        600: "#3a3a3a",
        700: "#2d2d2d",
        800: "#1f1f1f",
        900: "#050505",
      },
      purple: "#A445ED",
      orange: "#FF5252",
    },
  },
  plugins: [formPlugin],
};
