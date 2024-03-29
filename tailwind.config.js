/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {

      colors:{
        'bgDark':'#120118',
        'bgPrimary':'#00132D',
        'fontColor':'#FEFFFF',
        'neon1':'#4EDFFF',
        'neon2':'#D03CAB',
        'offWhite': '#E7E7E7'
      },
      fontFamily:{
        lemonMilk:['lemonMilk'],
        roadRage:['roadRage'],
        mokotoGlitch:['mokotoGlitch'],
        babaPro:['babaPro']
      },
      boxShadow: {
        gradient: ['-3px -3px 8px 4px #D03CAB, 3px 3px 8px 4px #4EDFFF']
      },
      backgroundImage:{
        '404bg':"url('/assests/Error404/404bg.png')"
      }
      

    },
  },
  plugins: [],
};
