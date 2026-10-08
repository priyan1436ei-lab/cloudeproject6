import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#dff4ff",
          200: "#b7ebff",
          300: "#7ad8ff",
          400: "#3dbdff",
          500: "#09a1f1",
          600: "#067ec4",
          700: "#0a5f9d",
          800: "#0d4d81",
          900: "#123f69",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(8, 162, 241, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
