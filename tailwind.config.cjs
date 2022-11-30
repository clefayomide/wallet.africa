/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IBM: ["IBM Plex Sans", "sans-serif"],
        Playfair: ["Playfair Display", "serif"],
      },
      colors: {
        button: "#00C9B6",
        dark_gray: "#FFFFFF",
        paragraph: "#FFFFFF",
        card_bg: "#e6f4f7",
        dark_purple: "#3B1E62",
      },
      height: {
        button: "67px",
      },
    },
  },
  plugins: [],
};
