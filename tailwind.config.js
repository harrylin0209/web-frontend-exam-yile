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
        "gray-1000": "#4D4D4D",
      },
    },
  },
  plugins: [],
}