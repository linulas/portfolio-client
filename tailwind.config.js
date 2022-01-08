module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#262533',
          light: '#fff',
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
          hover: '#E66C34',
        },
        platinum: '#E8E8E8',
        silver: '#C0C0C0',
      },
      screens: {
        xs: '0px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Montserrat'],
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        md: '0px 2px 8px -4px rgba(0,0,0,0.35)',
        lg: '0px 2px 12px 0px rgba(0,0,0,0.20)',
      },
    },
  },
  plugins: [],
};
