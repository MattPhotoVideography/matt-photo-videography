/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5CAAD6", // primary blue (buttons/links)
          dark: "#2E6F96",    // hover/active
          light: "#E6F4FB",   // pale tint for backgrounds/cards
          ring:  "#93C5FD"    // focus ring/outline
        },
        ink: "#111827",
        paper: "#FFFFFF",
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
};
