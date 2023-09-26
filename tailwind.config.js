/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF1E4',
        darkGreen: '#435334',
        mediumGreen: '#9EB384',
        lightGreen: '#8CA079',
        backgroundGreen: '#CEDEBD'
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"]
      }
    },
    screens: {
      xs: "480px",
      sm: "760px",
      md: "1060px",
    },
  },
  plugins: [],
}
