import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["var(--font-dm-serif-display)", "serif"],
    },
    extend: {
      screens: {
        xs: "30px",
      },
      colors: {
        black: "#101010",
      },
      gridTemplateColumns: {
        "1-4": "1fr 4fr",
        "20": "repeat(20, minmax(0, 1fr))",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-0.25em)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        solid: "0.05em 0.015em var(--tw-shadow-color)",
      },
    },
  },
};
export default config;
