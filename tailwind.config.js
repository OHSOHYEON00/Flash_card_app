/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        bg: '#39443D',
        text: `white`,
      },
      boxShadow: {
        progress: '0 0 12px 0 white',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
