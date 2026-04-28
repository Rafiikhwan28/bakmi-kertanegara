/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          50:  '#fdf2f7',
          100: '#fce7f0',
          200: '#fad0e3',
          300: '#f6a8c8',
          400: '#ef6fa3',
          500: '#d4347a',
          600: '#8f0b47',   // ← warna utama #8f0b47
          700: '#7a0a3d',
          800: '#650832',
          900: '#500628',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['"DM Serif Display"', 'serif'],
      },
      boxShadow: {
        'soft':  '0 2px 20px rgba(143,11,71,0.08)',
        'card':  '0 4px 32px rgba(143,11,71,0.12)',
        'glow':  '0 8px 40px rgba(143,11,71,0.25)',
      },
    },
  },
  plugins: [],
};
