const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/elements/**/*.{js,ts,jsx,tsx,mdx}',
    './src/elements/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: '#2F2F2F',
      },
      borderWidth: {
        DEFAULT: '2px',
      },
      colors: {
        primary: "#31A0F0",
        secondary: "#31F080",
        danger: "#F34E4E",
        background: "#212121",
        backgroundOverlays: "#111111",
      },
    },
  },
  safelist: [
    'lg:grid-cols-1',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
    {
    pattern: /(bg|text|border)-(primary|secondary|danger|background|backgroundOverlays|gray|amber|red)/
    }
  ],  
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
