/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right,#00008B , #487bff, #B8860B, #487bff, #00008B)',
        'diagonal-blue-yellow': 'linear-gradient(to top right, #b1b4c0, #f0e2a0)',
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


