/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
      colors: {
        userCyan: "hsl(179, 62%, 43%)",
        userBrightYellow: "hsl(71, 73%, 54%)",
        userLightGray: "hsl(204, 43%, 93%)",
        userGrayishBlue: "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
