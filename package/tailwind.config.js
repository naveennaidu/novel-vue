/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          title: ["var(--font-title)", "system-ui", "sans-serif"],
          default: ["var(--font-default)", "system-ui", "sans-serif"],
        },
        colors: {
          white: "var(--novel-white)",
          stone: {
            50: "var(--novel-stone-50)",
            100: "var(--novel-stone-100)",
            200: "var(--novel-stone-200)",
            300: "var(--novel-stone-300)",
            400: "var(--novel-stone-400)",
            500: "var(--novel-stone-500)",
            600: "var(--novel-stone-600)",
            700: "var(--novel-stone-700)",
            800: "var(--novel-stone-800)",
            900: "var(--novel-stone-900)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
