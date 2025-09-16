/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ['"ClashOfClans"', "sans-serif"],
        "clash-bold": ['"ClashOfClans-Bold"', "sans-serif"],
        "clash-regular": ['"ClashOfClans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
