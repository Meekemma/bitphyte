/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#020303',            // Primary dark background
        softGray: '#BEC4D6',        // Soft, cool gray for sections or UI elements
        navy: '#344056',            // Muted navy blue for headings or accents
        greenGray: '#718071',       // Earthy green-gray for subtle highlights
        indigo: '#45419C',          // Rich indigo for CTAs or important links
        lightGray: '#D8D9DF',       // Light neutral gray for backgrounds or borders
        mediumGray: '#A0A4AD',      // Medium gray for body text or icons
      },
      fontFamily: {
        // Custom font stacks
        sans: ['Inter', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


