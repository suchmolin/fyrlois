const flowbite = require("flowbite-react/tailwind")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2000px",
    },
    fontFamily: {
      customFont: ["lato", "Eastman", "EastmanBold", "Londrina"],
      // Add more custom font families as needed
    },
  },
  plugins: [flowbite.plugin()],
}
