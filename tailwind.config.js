module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#262533',
          light: '#fff'
        },
        black: {
          primary: '#030406',
          hover: '#2F2E36',
        },
        blue: {
          primary: '#254984',
          hover: '#607AA5',
        },
        rust: {
          primary: '#BB4625',
          hover: '#E66C34'
        },
        platinum: '#E8E8E8',
        silver: '#C0C0C0',
      },
      screens: {
        'xs': '0px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Montserrat'],
      },
    },
  },
  plugins: [],
};
