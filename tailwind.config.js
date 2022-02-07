module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'Quick': ['Quicksand', 'sans-serif'] ,
      'Cairo': ['Cairo', 'sans-serif'] 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
