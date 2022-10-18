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
        veryLightBlack: '#1B1B1B',
        lightBlack: '#121212',
        white: '#FFFFFF',
        grey: '#E5E5E5',
        normalGrey: '#ccc',
        darkGrey: '#444040',
        darkGreyHover: '#9e9393',
        buttonGrey: '#F6F6F6',
        facebookButton: '#082fce',
        formErrorColor: '#e74c3c',
      },
    },
  },
  plugins: [],
}
