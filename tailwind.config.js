/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'GreenDark': '#056133',
        'GreenSoft': '#09AA59',
        'GreySoft': '#1E1E1E',
        'GreyDark': '#0d0d0d',
        'WhiteSoft': '#737373',
        'DarkOpacity05': '#0d0d0df0',
        'DarkGreyOpacityE': '#1e1e1eee'
      },
      fontFamily: {
        fontPoppins: ['Poppins', 'sans-serif'],
        fontRoboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

