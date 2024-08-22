/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: { main: "rgb(73, 194, 199)" },
    extend: {
      backgroundImage: {
        site: 'url("/bg.jpg")',
      },
    },
  },
  plugins: [],
};
