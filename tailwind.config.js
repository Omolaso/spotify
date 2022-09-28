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

      },
    },
  },
  plugins: [],
}
