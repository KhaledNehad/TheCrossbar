/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
      danger: '#e53e3e',
      success: '#38a169',
      white: '#fff',
      black: '#1a202c',

      transparent: 'transparent'
    },
    extend: {}
  },
  plugins: []
};
