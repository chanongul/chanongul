import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      serif: ["var(--font-dm-serif-display)", "serif"],
    },
    extend: {
      screens: {
        xs: "30px",
      },
      colors: {
        charcoal: "#131311",
      },
      gridTemplateRows: {
        "13": "repeat(13, minmax(0, 1fr))",
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
    },
  },
};
export default config;
