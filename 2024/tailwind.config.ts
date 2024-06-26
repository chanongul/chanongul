import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "selector",
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Fira Mono", "monospace"],
      serif: ["Platypi", "serif"],
      cursive: ["Borel", "cursive"],
    },
    extend: {
      screens: {
        "2xs": "376px",
        xs: "540px",
        touch: { raw: "(hover: none)" },
        "no-touch": { raw: "(hover: hover) and (pointer: fine)" },
      },
      colors: {
        charcoal: "#131311",
      },
      gridTemplateRows: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      keyframes: {
        // floating: {
        //   "0%": { transform: "translateY(0)" },
        //   "50%": { transform: "translateY(-0.25em)" },
        //   "100%": { transform: "translateY(0)" },
        // },
        floating: {
          "0%,50%,100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(0.5em)" },
          "75%": { transform: "translateY(-0.5em)" },
        },
      },
      animation: {
        floating: "floating 1s linear infinite",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        solid: "0.075em 0.025em var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
export default config;
