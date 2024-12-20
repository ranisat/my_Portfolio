/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      colors:{
           p1:'#0c102b',
           pp1:'#484b9d',
           p2:'#3a3c84',
           p3:'#1c1050',
           s1:'#bc1ed4',
           s2:'#4ef2fe',
           s3:'#ffef07',
           textClr:'#86bbff'
      },
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
    }
  }
  },
  plugins: [],
}

