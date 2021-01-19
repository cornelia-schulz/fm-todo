module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      grey: {
        DEFAULT: "#fafafa"
      },
      greyBlue: {
        veryLight: "#e4e5f1",
        light: "#d2d3db",
        dark: "#9394a5",
        veryDark: "#484b6a"
      },
      blue: {
        bright: "#3a7bfd",
        DEFAULT: "#161722",
        desaturated: "#25273c"
      },
      blueGrey: {
        light: "#cacde8",
        hover: "#e4e5f1",
        dark: "#777a92",
        veryDark: "#4d5066",
        veryVeryDark: "#393a4c"
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
