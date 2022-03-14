module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'main-gold': '#ffce61',
        "main-black": "#38414a",
        'main-gray': '#ebeff2',
        "main-tip": '#98a6ad',
        "main-placeholder": "#6c757d",
        "main-border": "#ced4da",
        "main-head": "#343a40",
        "main-blue": "#71b6f9",
        "main-white": "#ffffff",
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['Open Sans'],
        'main': ['NotoSerifSC']
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
