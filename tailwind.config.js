/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#FC8634',
          base: '#FFB959',
          light: '#FFE6D4',
        },
        neutral: {
          25: '#FFFFFF',
          50: '#F3F4F4',
          100: '#E7E8E9',
          200: '#DFDFD2',
          300: '#B3A6A6',
          400: '#707479',
          500: '#404640',
          600: '#101820',
          700: '#0D151A',
          800: '#0A0E13',
          900: '#060A0D',
          1000: '#050606',
        },
        yellow: {
          dark: '#F9C916',
          base: '#FCDEA4',
          light: '#FFFAE0',
        },
        orange: {
          dark: '#EC8C3A',
          base: '#FB6423',
          light: '#FFE8D5',
        },
        red: {
          dark: '#C4270F',
          base: '#FA4023',
          light: '#FFE4E0',
        },
        green: {
          dark: '#00A67A',
          base: '#18E1B6',
          light: '#CDFEE8',
          extraLight: '#EBFFF6',
        },
        blue: {
          dark: '#0F3C8E',
          base: '#1649FF',
          light: '#D7EAFF',
        },
      },
    },
  },
  plugins: [],
} 