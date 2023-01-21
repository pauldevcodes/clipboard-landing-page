/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      strongCyan: 'hsl(171, 66%, 44%)',
      lightBlue: 'hsl(233, 100%, 69%)',
      darkGrayishBlue: 'hsl(210, 10%, 33%)',
      grayishBlue: 'hsl(201, 11%, 66%)',
      white: 'hsl(0, 0%, 100%)'
    },
    extend: {},
  },
  plugins: [],
}
