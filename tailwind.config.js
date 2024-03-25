/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "basic-white": "#F4F6FA",
        "button-bg": "#2E3239",
        "button-text": "#8C8E93",
      },
    },
  },
  plugins: [],
};
