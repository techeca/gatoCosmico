/** @type {import('tailwindcss').Config} */
//import tailwincssAnimated from ''
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular:['Regular'],
        medium:['Medium'],
        bold:['Bold'],
        semibold:['SemiBold'],
        light:['Light'],
        extrabold:['ExtraBold'],
        extralight:['ExtraLight']
      },
      boxShadow: {
        purpleshadow: '0 5px 90px 59px #6b38f738'
      },
      animation: {
        pulseOnAppear: 'pulseOnAppear 1.5s ease-in-out',
        changeColor: "changeColor 1.5s ease-in-out forwards",
      },
      keyframes: {
        pulseOnAppear: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        changeColor: {
          "0%": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
          "100%": { backgroundColor: "rgba(79, 70, 229, 1)" }, // bg-indigo-600
        },
      }
    },
  },
  plugins: [
    require("tailwindcss-animated")
  ],
}

