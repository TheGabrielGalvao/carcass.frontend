/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        black: "#000",
        white: "#FFF",
        transparent: "transparent",
        primary: {
          500: "#4FD18B",
          400: "#6BD198",
          100: "#DCF5E8",
        },
        secondary: {
          500: "#4C49ED",
          400: "#625FF9",
          100: "#E4E9F7",
        },
        blue: {
          500: "#4C49ED",
          400: "#625FF9",
          100: "#E4E9F7",
        },

        green: {
          500: "#4FD18B",
          400: "#6BD198",
          100: "#DCF5E8",
        },

        yellow: {
          500: "#FFD12E",
          400: "#FFD84D",
          100: "#FFF4CB",
        },

        red: {
          500: "#D14F4F",
          400: "#D05D5D",
          100: "#F5DCDC",
        },

        grey: {
          500: "#A1A0BD",
          400: "#CCCBD8",
        },

        cyan: {
          500: "#81d8f7",
          300: "#9be1fb",
        },
      },
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
  },
  plugins: [],
};
