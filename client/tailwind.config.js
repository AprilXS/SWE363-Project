/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7E6CF0',
        'bgPrimary': '#FFFBF5',
        'secondary': '#C3ACD0',
        'bgSecondary': '#F7EFE5',
      }
    },
  },
  plugins: [],
}

