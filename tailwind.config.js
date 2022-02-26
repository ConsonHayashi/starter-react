module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'main-gold': '#ffce61',
        'main-gray': '#485159'
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['Open Sans'],
        'main': ['NotoSerifSC']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
