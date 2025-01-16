/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #fc72ff, #8f68ff, #487bff, #8f68ff, #fc72ff)',
      },
      backgroundClip: {
        text: 'text',
        border: 'border-box',
        padding: 'padding-box',
        content: 'content-box',
      },
      keyframes: {
        'animate-gradient': {
          '0%': { backgroundPosition: '0% 25%' },
          '50%':{backgroundPosition: '25% 75%'},

          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'animate-gradient': 'animate-gradient 2.5s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add the scrollbar plugin
  ],
};


