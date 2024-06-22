/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
        'fade-in': 'fade-in 1s ease-in-out',
      },
      colors: {
        'custom-blue': '#14279b', 
        'custom-lightblue': '#1E90FF', 
        'custom-gray': '#484848',
        'custom-lightgray':'#f3f9fd',
        'custom-grayvish':' #e6e6e6',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      spacing: {
        '50': '12.5rem', // 50px
      },
      borderRadius: {
        '50px': '50px',
      },
    },
  },
  variants: {
    extend:{

    }
  },
  plugins: [],
}
