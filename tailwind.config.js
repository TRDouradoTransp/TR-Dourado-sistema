/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F0F0E",
        panel: "#171716",
        gold: "#C9A227",
        goldsoft: "#E4C567",
        line: "#2A2A27",
        paper: "#F5F3ED",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
