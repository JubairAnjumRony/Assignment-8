/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: "#9538E2",
      },
      
      backgroundImage: {
        "hero-pattern": "url('./assets/banner.jpg')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [    require('daisyui'),],
}

