/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":'#ffa500',
        "git":'#f1f1f1',
        "main":'#ffffff',
        "text":'black',
        "darkmodebg":'#000000',
        "darkcard":'#1e1f21',
        "lightcard":'#ebebeb',
      },
       animation: {
        text: 'text 5s ease infinite',
        typewriter: "typewriter 2s steps(11) forwards",
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        typewriter: {
          to: {
            left: "100%"
          }
        }
      },
    
      
      
    },
  },
  plugins: [],
}

