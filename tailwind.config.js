/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          950: '#0e0800',
          900: '#1a0a00',
          800: '#2d1200',
          700: '#3b1a00',
          600: '#5c2d00',
          500: '#7a3d00',
          400: '#9a5a1a',
          300: '#c9a87c',
          200: '#e8d5b0',
          100: '#fdf6ec',
        },
        gold: {
          DEFAULT: '#d4a017',
          light:   '#e8b820',
          dark:    '#a87c10',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
