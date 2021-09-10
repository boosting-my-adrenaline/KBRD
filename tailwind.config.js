module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    width: {
      1000: '1008px',
      1500: '1500px',
      2000: '2000px',
    },

    fontFamily: {
      courier: 'courier',
    },
    transform: {
      none: 'none',
      'scale-110-and-rotate-90': 'scale(1.1) rotate(90deg)',
    },
    extend: {
      screens: {
        '1k': '1000px',
        '3xl': '1600px',
        '2k': '2000px',
        '3k': '3000px',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'responsive'],
    },
  },
  plugins: [],
}
