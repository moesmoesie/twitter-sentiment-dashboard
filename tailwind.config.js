module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts,css}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  important: true,
  jit: true,
  theme: {
    extend: {
      colors: {
        primary1: "#7F39FB",
        primary2: "#23036A",
        baseTextColor: "#666666"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
