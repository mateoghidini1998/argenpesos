import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        "lightblue-primary": "#17AAE1",
        "gree-primary": "#82CC6D",
        "red-primary": "#EC5647",
        "purple-primary": "#6104EE",
        "purple-secondary": "#B33ADB",
        "orange-primar": "#E84729",
        "mustard": "#F19424",
        "grey-primary": "#888"
      }
    },
  }, 
  plugins: [],
};
export default config;
