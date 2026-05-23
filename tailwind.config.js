/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Sans TC"', 'sans-serif'],
      },
      colors: {
        "gray-100": "#FFFFFF",
        "gray-500": "#CCCCCC",
        "gray-700": "#999999",
        "gray-800": "#808080",
        "gray-1000": "#4D4D4D",
        "orange-700": "#EE8927",
      },
    },
  },
  plugins: [],
}