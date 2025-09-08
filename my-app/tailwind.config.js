/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Add this for your pages folder
  ],
  theme: {
    extend: {
      // Add custom colors matching your design
      colors: {
        'light-blue': '#e0f7fa',
        'sky-blue': '#00bfff',
        'deep-blue': '#009acd',
        'link-blue': '#1976d2',
        'hover-blue': '#005fa3',
      },
      // Add gradient for buttons
      backgroundImage: {
        'blue-gradient': 'linear-gradient(90deg, #00bfff 60%, #009acd 100%)',
        'blue-gradient-hover': 'linear-gradient(90deg, #009acd 60%, #00bfff 100%)',
      }
    },
  },
  plugins: [],
}