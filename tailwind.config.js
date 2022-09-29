/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm: '468px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors:{
        black: '#000000',
        lightBlack: '#121212',
        white: '#FFFFFF',
        grey: '#E5E5E5',
        buttonGrey: '#F6F6F6',
      },
    },
  },
  plugins: [],
}
