/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', //includes all of CSS utility classes for dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      boxShadow: {
        'innerCircle': 'inset 0 0 0 4px #FFF',
      },
    },
    screens: {
      xs: { max: "479px" },
      sm: { max: "639px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
      xl: { max: "1279px" },
    }
  },
  plugins: [],
}
