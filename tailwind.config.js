/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'st': '280px',
      'ss': '360px',
      'sg': '400px',
      'sh': '550px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2md': '1400px',
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        'custom': '0px 6px 0px -2px #000',
      },
      fontFamily: {
        'gulf': 'Gulfs Display'
      }
    },

  },
  plugins: [],
};
