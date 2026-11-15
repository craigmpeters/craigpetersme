/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      // Article container widths are independent of viewport breakpoints.
      articleScreens: {
        sm: '576px',
      },
    },
  fontFamily: {
    'sans': ['Lexend', 'Sans-serif']
  },
  },
  plugins: [],
}

