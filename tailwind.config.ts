import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        instrument: ["var(--font-instrument)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
        headline: ["var(--font-headline)", "sans-serif"],
      },
      colors: {
        "bg-primary": "#f5f5f0",
        "bg-dark": "#0a0a0a",
        "accent-orange": "#ff6b35",
      },
      animation: {
        "pulse-dot": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
