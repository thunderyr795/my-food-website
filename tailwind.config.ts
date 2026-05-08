import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171412",
        cream: "#fbfaf7",
        porcelain: "#f3f0ea",
        tomato: "#e94f37",
        moss: "#596f48"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(23, 20, 18, 0.10)",
        lift: "0 20px 44px rgba(23, 20, 18, 0.14)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
