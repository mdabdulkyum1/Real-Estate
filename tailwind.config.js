/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#F7F9FA',
        'primary': '#2A4D69',
        'accent': '#4B86B4',
        'secondary': '#F4B400',
        'text-dark': '#334E58',
        'light-accent': '#D9EAD3',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}