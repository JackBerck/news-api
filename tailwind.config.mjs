/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "white-base": "#f1f5f9",
        "dark-base": "#1a202c",
        "blue-base": "#3b82f6",
        "blue-light": "#60a5fa",
        "blue-dark": "#1e40af",
      },
    },
  },
  plugins: [],
};
