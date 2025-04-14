/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#474555',
        'dark-gray': '#474555',
        'light-gray': '#ACA9BB',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '25%': { opacity: '0.25', transform: 'translateY(7.5px)' },
          '50%': { opacity: '0.5', transform: 'translateY(5px)' },
          '75%': { opacity: '0.75', transform: 'translateY(2.5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} 