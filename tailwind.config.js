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
          100: "#D6F6DD",
          200: "#ADE9C9",
          300: "#85DDB4",
          400: "#5CD09F",
          500: "#47D16E",
          600: "#3EBF63",
          700: "#36AD58",
          800: "#2E9B4D",
          900: "#268842",
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
