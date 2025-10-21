// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#c4b5fd",
          DEFAULT: "#8b5cf6",
          dark: "#6d28d9",
        },
        background: "#0f0a1a",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [], // se quiser adicionar plugins, importe no topo e coloque aqui
};
