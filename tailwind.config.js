/** @type {import('tailwindcss,daisyui').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["poppins", "serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

