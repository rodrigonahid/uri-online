module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            blue: {
                default: '#494AFC'
            }
        },
        fontFamily: {
            raleway:  ['Raleway', 'sans-serif'],
            sans: ['Quicksand', 'sans-serif']
        }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
