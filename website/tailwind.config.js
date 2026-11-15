/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          terracotta: '#8B2616',
          terracottaDark: '#6E1B0E',
          sandstone: '#F4ECE1',
          sandstoneDark: '#E5D6C3',
          parchment: '#FAF6EE',
          indigo: '#1F3A52',
          indigoDark: '#142738',
          gold: '#C99738',
          goldLight: '#E0B55E',
          umber: '#2C221E',
          charcoal: '#1A1412',
          celadonite: '#4A6B5B'
        }
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
