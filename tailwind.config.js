const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/elements/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/elements/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "#2F2F2F",
      },
      borderWidth: {
        DEFAULT: "2px",
      },
      colors: {
        primary: {
          DEFAULT: "#31A0F0",
          50: "#DCEFFC",
          100: "#C9E6FB",
          200: "#A3D5F8",
          300: "#7DC3F6",
          400: "#57B2F3",
          500: "#31A0F0",
          600: "#1085D9",
          700: "#0C65A5",
          800: "#084571",
          900: "#04253C",
          950: "#021522",
        },
        secondary: {
          DEFAULT: "#31F080",
          50: "#DCFCEA",
          100: "#C9FBDE",
          200: "#A3F8C6",
          300: "#7DF6AF",
          400: "#57F397",
          500: "#31F080",
          600: "#10D963",
          700: "#0CA54B",
          800: "#087133",
          900: "#043C1B",
          950: "#022210",
        },
        danger: {
          DEFAULT: "#F34E4E",
          50: "#FFFAFA",
          100: "#FDE7E7",
          200: "#FBC1C1",
          300: "#F89A9A",
          400: "#F67474",
          500: "#F34E4E",
          600: "#EF1919",
          700: "#C40D0D",
          800: "#8F0A0A",
          900: "#5A0606",
          950: "#400404",
        },

        black: "#111111",
        background: "#212121",
        backgroundSecondary: "#2F2F2F",
        darkGrey: "#474747",
        lightGrey: "#AFAFAF",
      },
    },
  },
  safelist: [
    "lg:grid-cols-1",
    "lg:grid-cols-2",
    "lg:grid-cols-3",
    "lg:grid-cols-4",
    "lg:grid-cols-5",
    "lg:grid-cols-6",
    "lg:grid-cols-7",
    {
      pattern:
        /(bg|text|border)-(primary|secondary|danger|black|background|backgroundSecondary|darkGrey|lightGrey|gray|amber|red)/,
    },
  ],
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
