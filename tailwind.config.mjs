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
        node: "var(--color-node)",
        tailwind: "var(--color-tailwind)",
        sass: "var(--color-sass)",
        quasar: "var(--color-quasar)",
      },
       textShadow: {
        'lg': '0 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
