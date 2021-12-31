module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      screens: {
        '1k': '1000px',
        '135k': '1350px',
        '160k': '1600px',
        '3xl': '1600px',
        '2k': '2000px',
        '3k': '3000px',
      },
      width: {
        f: '100%',
        1000: '1008px',
        1500: '1500px',
        2000: '2000px',
      },
      height: {
        f: '100%',
        px: '1px',
      },
      transition: {
        t03: '0.3s ease-in-out',
        t05: '0.5s ease-in-out',
        t07: '0.7s ease-in-out',
        t1: '1s ease-in-out',
      },

      fontFamily: {
        courier: 'courier',
        roboto: `Roboto Condensed', sans-serif`,
      },

      transform: {
        none: 'none',
        'scale-110-and-rotate-90': 'scale(1.1) rotate(90deg)',
      },
      boxShadow: {
        '3xl': '0 1px 10px 5px rgba(0, 0, 0, 0.01)',
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
