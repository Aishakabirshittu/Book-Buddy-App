// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B9AA0", // Teal Blue 
        "primary-light": "#F5FDFD", // lighter teal "#A3C8C6" #CBE2E0 #E4F4F3
        secondary: "#D9B945", // Bright Yellow 
        "secondary-light": "#FFDD57",
        accent: "#FFE4B5", // Moccasin Beige 
      },
    },
  },
  plugins: [],
};
