/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F9F6F0',
        iron:   '#1A1B1C',
        clay:   '#D65A31',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono:  ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 9vw, 9rem)',  { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 5vw, 5rem)',     { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'body-mono':  ['clamp(0.8rem, 1.2vw, 1rem)', { lineHeight: '1.8' }],
        'tag-mono':   ['0.7rem',                     { lineHeight: '1',   letterSpacing: '0.14em' }],
      },
    },
  },
  plugins: [],
}
