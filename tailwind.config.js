/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'], 
        inter: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }, // ✅ Added comma here
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideUp: 'slideUp 0.4s ease-out forwards', // ✅ Add this too
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
