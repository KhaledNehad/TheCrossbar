/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5843be',
        secondary: '#ecc94b',
        danger: '#e53e3e',
        success: '#38a169',
        black: '#1a202c',
        appBlue: {
          900: '#0A1F44',
          800: '#1A365D',
          700: '#2B4C9B',
          600: '#4E7DDE', // Main Blue
          500: '#6A9AF5',
          400: '#7EA0E0', // Secondary Blue
          300: '#C1D2F8', // Light Blue
          200: '#E6F0FF',
          100: '#F2F6FF'
        },
        lightGray: '#798FAA'
      },

      transparent: 'transparent'
    }
  },
  extend: {},
  plugins: []
};
