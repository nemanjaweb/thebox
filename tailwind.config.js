/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      '13px' : '13px',
      '15px' : '15px',
      '16px' : '16px',
      '18px' : '18px',
      '24px' : '24px',
      '53px': '53px',
    },
    extend: {
      colors:{
        main:'#3559C7',
        contact: '#F9995D',
        nav_color: '#14171F',
        button: '#3559C7',
        arrows: '#292E3D',
        border: '#E0E3EB',
        siva: '#858EAD'
      },        
      backgroundImage: {
        'hero': "url('/src/img/hero.jpg')",
        'logo-text': "url('./src/img/logo_text.jpg')",
      },

      width: {
        'big-logo-width':'28px',
        'logo-width':'33px',
        'logo-text-width': '118px',
        'big-logo-text-width' :'81px',
        'btn-line': '0.75px',
        'arrow': '19px',
        'blue-width' : '305px',
        '152px' :'152px',
        '214px': '214px'

        
      },

      height:{
        'big-logo-height': '35px',
        'logo-height': '59,19px',
        'logo-text-height': '37px',
        'big-logo-text-height': '26px',
        'arrow-h': '12px',
        'blue-height': '139px',
        '29px' : '29px',
        '144px': '144px'
      },
      padding: {
        '13px' : '13px',
        '14px': '14px',
        '18px' : '18px',
        '26px': '26px',
        '30px': '30px',
        '32px': '32px',
        '33px': '33px',
        '41px': '41px',
        '47px': '47px',
        '38px': '38px',
        '62px': '62px',
        '65px':'65px',
        '109px' : '109px',

      },
      spacing:{
        '12px' : '12px',   
        '15px' : '15px',
        '19px' : '19px',
        '21px' : '21px',
        '22px' : '22px',
        '26px': '26px',
        '29px': '29px',
        '33px' : '33px',
        '47px': '47px',
        '82px' : '82px',
        '91px' : '91px',
        '120px': '120px'

        
        
      },
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}