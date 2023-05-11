const { color } = require("framer-motion")
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sen: ['var(--font-sen)', ...fontFamily.sans]
      },
      colors: {
        'oceanblue': '#070E34',
        'skyblue': '#83B4FF',
        'electricblue': '#58FFF5',
        'peach': '#FFE1B4',
        'lavender': '#D3D9FE',
        'coolblack': '#081664',
        'oxfordblue': '#071355',
        'metalicblue': '#405677',
        'cornflowerblue': '#354287'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
