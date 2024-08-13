import Linkedin from "./src/components/icons/Linkedin.astro";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        dark: "var(--color-dark)",
        laravel: "var(--color-laravel)",
        vue: "var(--color-vue)",
        linkedin: "var(--color-linkedin)",
      },
    },
  },
  plugins: [],
};
