/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        electricBlue: '#1E90FF',
        neonGreen: '#39FF14',
        darkCharcoal: '#333333',
        softWhite: '#F7F7F7',
        brightCoral: '#FF6F61',
        brightRed: '#FF3B30',
        vibrantPurple: '#9B59B6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
