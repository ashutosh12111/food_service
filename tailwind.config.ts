/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        'poppins': ['Poppins-Regular', 'sans-serif'],
        'poppins-bold': ['Poppins-Bold', 'sans-serif'],
        'poppins-ebold': ['Poppins-ExtraBoldItalic', 'sans-serif'],
        'poppins-medium': ['Poppins-Medium', 'sans-serif'],
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'gray': '#8492a6',
        "primary": "#3A3A3A"
      },
      scale: {
        '150': '1', // This creates a scale-300 utility
      },
      spacing: {
        '2x': '20px',
        '3x': '30px',
      },
      borderRadius: {
        '4xl': '40px',
        "3xl": '37px',
        "2xl": "27px",

      },
      textColor: {

      }
    },
  },
  plugins: [],
};
