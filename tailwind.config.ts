import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['var(--font-rubik-mono-one)'],
        'geist': ['var(--font-geist-mono-one)']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      boxShadow: {
        'one': '0 3px 6px -15px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
} satisfies Config;
