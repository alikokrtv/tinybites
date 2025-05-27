/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Primary color - Teal/Green from logo (#6AADA3)
        'primary': {
          50: '#f0f9f8',
          100: '#d9eeed',
          200: '#b4e0dd',
          300: '#90d1cc',
          400: '#7fc4be',
          500: '#6AADA3', // Logo rengi
          600: '#548a82',
          700: '#436e68',
          800: '#32524e',
          900: '#213634',
        },
        // Secondary color - Darker Teal from logo (#228183)
        'secondary': {
          50: '#e7f3f3',
          100: '#cfe6e7',
          200: '#a1d0d1',
          300: '#73b9ba',
          400: '#469ea0',
          500: '#228183', // Logo rengi
          600: '#1b6768',
          700: '#144d4e',
          800: '#0e3435',
          900: '#071a1b',
        },
        // Accent colors - Soft Yellow (complementary to logo colors)
        'accent': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-in-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-in-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-in-out forwards',
        'wave': 'wave 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};