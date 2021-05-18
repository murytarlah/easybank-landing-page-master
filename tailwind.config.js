module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // keyframes: {
      //   'up_down':{
      //     '0%':{
      //       transform: 'translateX(0)'
      //     },
      //     '50%':{
      //       transform: 'translateY(-2px)'
      //     },
      //     '75%':{
      //       transform: 'translateY(0)'
      //     },
      //     '75%':{
      //       transform: 'translateY(2px)'
      //     }
      //   }
        
      // },
      // animation: {
      //   'up_down': 'up_down 3s linear 1s 1 forwards',
      //  },
      backgroundColor:{
        'vl-gray':'hsl(0, 0%, 98%)',
        'lg-blue': 'hsl(220, 16%, 96%)',
        'g-blue':'hsl(233, 8%, 62%)',
        'd-blue':'hsl(233, 26%, 24%)',
      },
      width:{
        '4/5':'80%',
        'x3':'30%',
        '2x':'170%',
        '3x':'300%'
      },
      colors:{
        'b_cyan': 'hsl(192, 70%, 51%)',
        'l_green': 'hsl(136, 65%, 51%)',
        'b_cyan-l': 'hsl(192, 70%, 70%)',
        'l_green-l': 'hsl(136, 65%, 70%)',
        'vl-gray':'hsl(0, 0%, 98%)',
        'lg-blue': 'hsl(220, 16%, 96%)'
      },
      textColor:{
        'b-cyan': 'hsl(192, 70%, 51%)',
        'l-green': 'hsl(136, 65%, 51%)',
        'vl-gray':'hsl(0, 0%, 98%)',
        'lg-blue': 'hsl(220, 16%, 96%)'
      },
      flexGrow: {
       '1': 1,
       '2':2,
      },
      backgroundImage:{
        'header-desktop':'url("images/bg-intro-desktop.svg")',
        'header-mobile':'url("images/bg-intro-mobile.svg")',
        'btn':'linear-gradient(to right, hsl(136, 65%, 51%),hsl(192, 70%, 51%))',
        'btn-h':'linear-gradient(to right,hsl(192, 70%, 51%), hsl(136, 65%, 51%))',
      },
      backgroundSize:{
        '70':'70%'
      },
      backgroundPosition:{
        'header-desktop-pos':'10% 0%',
      },
      zIndex: {
        '5': 5,
      },
      inset:{
        '3/5':'60%'
      },
      maxHeight:{
        '3/4':'93vh'
      },
      minHeight:{
        '48':'5rem'
      },
      borderColor:{
        'l-green': 'hsl(136, 65%, 51%)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
