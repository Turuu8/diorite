/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      amiri: ["Amiri"],
      inter: ["Inter", ""],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      main: "#f2f2f2",
      dark: "#0D0E13",
      title: "#333232",
      description: "#404245",
    },
    screens: {
      xl: { max: "1194px" },
      lg: { max: "820px" },
      md: { max: "767px" },
      sm: { max: "600px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
