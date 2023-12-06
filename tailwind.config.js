import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#f0f5ff",
          200: "#f0f5ff",
          300: "#f0f5ff",
          400: "#00ff7f",
          500: "#4bffa5",
          600: "#00ff7f",
          700: "#00ff7f",
          800: "#00ff7f",
          900: "#00ff7f",
        },
      },
      keyframes: {
        love: {
          "100%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        love: "love 0.5s linear infinite alternate-reverse",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
