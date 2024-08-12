/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#BBE7FF',
        'custom-purple': '#9309FF',
        'custom-darkblue': '#4460F0',
      }
    },
  },
  plugins: [],
}

