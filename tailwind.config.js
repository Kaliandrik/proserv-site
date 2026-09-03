/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#8B2CF5',
          'purple-dark': '#6D20C7',
          'purple-light': '#F3EEFD',
          yellow: '#FACC15',
          surface: '#F8F9FD',
          dark: '#1E1E24',
        }
      }
    },
  },
  plugins: [],
}