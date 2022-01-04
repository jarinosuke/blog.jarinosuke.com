module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'dark-accent-1': '#171717',
        'main-1': '#212121',
        'dark-main-1': '#D4D4D4',
        'sub-1': '#585F6D',
        'dark-sub-1': '#8A878E',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
