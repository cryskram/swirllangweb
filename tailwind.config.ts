import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // bg: "#ced4da",
        bg: "#D7DDE7",
      },
      dropShadow: {
        "3xl": "5px 5px 0 rgba(15, 23, 42, 0.25)",
        "4xl": "8px 8px 0 rgba(15, 23, 42, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
