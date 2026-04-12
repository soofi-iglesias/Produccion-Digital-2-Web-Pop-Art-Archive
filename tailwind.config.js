/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.php"],
  theme: {
    extend: {
      colors: {
        // Neutros
        'cream':        '#FBFAF4',
        'brand-white':  '#FFFFFF',
        'navy':         '#00344F',
        'almost-black': '#1A1A1A',

        // Pop colors
        'pop-yellow':   '#FFD400',
        'pop-red':      '#FF3B3B',
        'pop-blue':     '#0085FF',
        'pop-green':    '#00E676',
        'pop-pink':     '#FF4FD8',
        'pop-orange':   '#FF7A00',
        'pop-celeste':  '#00CFFF',
        'pop-purple':   '#7A5CFF',
      },
      fontFamily: {
        sans:    ['"Montserrat"', 'sans-serif'],
        display: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}