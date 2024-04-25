/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        bg: '#39443D',
        text: `white`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
