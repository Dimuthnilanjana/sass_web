/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0A0A0A',
          900: '#121212',
          800: '#181818',
          700: '#232323',
          600: '#2C2C2C',
          500: '#313131',
          400: '#3A3A3A',
        },
        accent: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          pink: '#EC4899',
          teal: '#14B8A6',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};