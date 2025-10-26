/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a73e8',
          dark: '#1557b0',
        },
        secondary: {
          DEFAULT: '#4a5568',
          dark: '#2d3748',
        },
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
