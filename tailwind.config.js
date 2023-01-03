/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "project-primary":"#0F4C81",
        "project-secondary":"#004E71",
      }
    },
    fontFamily:{
      Montserrat:["Montserrat,sans-serif"],
    },
    container:{
      padding:"2rem",
      center:true,
    },
    screens:{
      sm:"640px",
      md:"768px",
    }
  },
  plugins: [],
}
