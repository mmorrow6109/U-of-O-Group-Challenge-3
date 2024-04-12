/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: { // Tailwind CSS breakpoints
       ssm: "375px",
       sm: "640px",
       md: "768px",
       lg: "1024px",
       xl: "1280px",
      },
      extend: {},
    },
    plugins: [],
  }
  
  