/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        prussian: {
          DEFAULT: '#004B7A',
          dark: '#003560',
          light: '#0066a8',
        },
        sky: '#4A90E2',
        crimson: '#B21F36',
        ink: '#0d1b2a',
        surface: '#f4f7fa',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
