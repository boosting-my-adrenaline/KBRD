module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      gridTemplateColumns: {
        custom1: `1fr min-content 1fr`,
      },

      screens: {
        '1k': '1000px',
        '135k': '1350px',
        1200: '1200px',
        1400: '1400px',
        '160k': '1600px',
        '3xl': '1600px',
        '2k': '2000px',
        '3k': '3000px',
      },

      width: {
        f: '100%',
        '50%': '50%',
        '70%': '70%',
        '8px': '8px',
        '9px': '9px',
        '11px': '11px',
        '12px': '12px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '40px': '40px',
        '42px': '42px',
        '50px': '50px',
        '80px': '80px',
        '82px': '82px',
        '120px': '120px',
        '140px': '140px',
        '150px': '150px',
        '180px': '180px',
        '200px': '200px',
        '220px': '220px',
        '250px': '250px',
        '270px': '270px',
        '275px': '275px',
        '340px': '340px',
        '350px': '350px',
        '450px': '450px',
        '700px': '700px',
        1000: '1008px',
        '1007px': '1007px',
        1008: '1008px',
        '1000px': '1000px',
        '1028px': '1028px',
        '1040px': '1040px',
        '1100px': '1100px',
        1500: '1500px',
        2000: '2000px',
        '10000px': '10000px',
      },

      height: {
        f: '100%',
        '0px': '0px',
        '1px': '1px',
        '2px': '2px',
        px: '1px',
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '25px': '25px',
        '35px': '35px',
        '40px': '40px',
        '43px': '43px',
        '45px': '45px',
        '50px': '50px',

        '60px': '60px',
        '63px': '63px',
        '65px': '65px',
        '80px': '80px',

        '100px': '100px',
        '150px': '150px',
        '175px': '175px',
        '260px': '260px',
        '400px': '400px',
        '620px': '620px',
      },

      transitionDuration: {
        0: '0ms',
        125: '125ms',
        250: '250ms',
        275: '275ms',
        400: `400ms`,
        600: '600ms',
        650: '650ms',
        750: '750ms',
        1250: '1250ms',
        2000: '2000ms',
        3000: '3000ms',
        15000: `15000ms`,
      },

      spacing: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '5px': '5px',
        '6px': '6px',
        '10px': '10px',
        '18px': '18px',
        '30px': '30px',
        '55px': '55px',
        '100px': '100px',
        '500px': '500px',
        '70px': '70px',
        '85px': '85px',
      },

      rotate: {
        '20deg': '20deg',
        '90deg': '90deg',
      },
      opacity: {
        985: '0.985',
      },

      fontSize: {
        '2em': '2em',
        '3.5em': '3.5em',
        '4em': '4em',
        '5em': '5em',
        custom1: 'calc(10px + 2vmin)',
      },

      borderRadius: {
        '40px': '40px',
      },

      borderWidth: {
        3: `3px`,
        5: `5px`,
      },

      gap: {
        '60px': '60px',
      },

      zIndex: {
        1: 1,
        2: 2,
        5: 5,
        8: 8,
        9: 9,
        11: 11,
        12: 12,
        15: 15,
        18: 18,
        19: 19,
        21: 21,
        22: 22,
        25: 25,
        28: 28,
        29: 29,
        31: 31,
        32: 32,
        35: 35,
        38: 38,
        39: 39,
        41: 41,
        42: 42,
        45: 45,
        48: 48,
        49: 49,
        51: 51,
        52: 52,
        55: 55,
        58: 58,
        59: 59,
        60: 60,
        70: 70,
        2022: 2022,
      },

      fontFamily: {
        courier: 'courier',
        roboto: `Roboto Condensed', sans-serif`,
        BebasNeue: ['Bebas Neue'],
        Bebas: ['Bebas'],
        ArchitectsDaughter: ['Architects Daughter'],
        Staatliches: ['Staatliches'],
        Merriweather: ['Merriweather'],
        Cooper: ['Cooper'],
        Nuvo: ['Nuvo'],
        Pitch: ['Pitch'],
        CourierC: [`CourierC`],
      },

      transform: {
        none: 'none',
        'scale-110-and-rotate-90': 'scale(1.1) rotate(90deg)',
      },
      boxShadow: {
        '3xl': '0 1px 10px 5px rgba(0, 0, 0, 0.01)',
        '4th': `1px 1px 4px 1px rgba(0, 0, 0, 0.01)`,
        '5th': `4px 4px 11px 8px rgba(0, 0, 0, 0.01)`,
        '6th': `0 1px 5px 1px rgba(0, 0, 0, 0.01)`,
        '7th': '0 0 2px 2px rgba(0, 0, 0, 0.5)',
        '8th': '0 0 5px 4px rgba(0, 0, 0, 0.01)',
        '9th': '0 0 1.5px  rgba(0, 0, 0, 0.01)',
        '10th': '2px 1px 12px 4px rgba(0, 0, 0, 0.3)',
        '11th': '2px 0 4px 4px rgba(50, 50, 50, 0.3)',
        '12th': '2px 5px 20px 10px rgba(0,0,0,0.1)',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'responsive', 'focus', 'active'],
      backgroundColor: ['active'],
      color: ['active', 'hover'],
      border: ['hover'],
      transitionProperty: [
        'responsive',
        'motion-safe',
        'motion-reduce',
        'hover',
      ],
    },
  },
  plugins: [],
}
