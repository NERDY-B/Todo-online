/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/components/*.{js,jsx}",
    "./src/screens/*.jsx",
    "./src/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#3556AB',
        primary:{
          50: '#071D55',
          100: 'rgba(53, 86, 171, .7)',
          200: '#3556AB',
          300: '#0D2972'
        },
        lemon: '#CDE53D',
        midPrimary: '#FFFFFF',
        redPrimary: '#AB3535',
        redSecondary: '#AB3535',
        
       black: '#000000'

      },
      fontFamily: {
        sanss: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }

    },
  },
  plugins: [],
}

