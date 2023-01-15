/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('../public/cloth1.jpg')"
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: '367px',
        md: '760px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
};