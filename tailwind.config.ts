import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '1200px',
      },
      colors: {
        navy: {
          DEFAULT: "#010f62",
          light: "#202b5d",
        },
        accent: {
          DEFAULT: "#0033ff",
          dark: "#0067da",
        },
        para: "#62718d",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
