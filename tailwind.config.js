/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          50:  '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['"DM Serif Display"', 'serif'],
      },
      boxShadow: {
        'soft':  '0 2px 20px rgba(147,51,234,0.08)',
        'card':  '0 4px 32px rgba(147,51,234,0.12)',
        'glow':  '0 8px 40px rgba(147,51,234,0.25)',
      },
    },
  },
  plugins: [],
};
