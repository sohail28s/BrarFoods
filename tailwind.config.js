/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marquee: "#c5b4e2",
        main:"#231f20",
        bgmenu: "#f6efe2",
        mandalaorange: "#c14729",
        mandalabrown: "#973a20",
        mandalayellow: "#cc7a29",
        mandalablue: "#0075bd",
        mandalapurple: "#cf82b7",
        mandalaorangev1: "#f47d48",
        mandalacyan: "#3ebdac",
        mandalalightyellow: "#ebab21",
        mandalapink: "#e43f50",
        mandalapurpledark : "#811b48",
        orangefooter : "#ff5200",
        orangebg: "#c03600",
        yellowfooter: "#c6a26d",
        herocyan : "#778ba1",
        heroyellow : "#ffc629",
        titleveggie : "#ff4900",
        accblue: "#3bb3e3",


        

      },
      fontFamily: {
         'degular': ['"Degular"', 'sans-serif'],
         'venice': ['"Venice Blvd"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}