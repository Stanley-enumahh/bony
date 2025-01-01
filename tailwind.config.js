/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mailray: ["Mail Ray Stuff", "cursive"],
        jellee: ["jellee-Roman", "sans-serif"],
      },
    },
  },
  plugins: [],
};
