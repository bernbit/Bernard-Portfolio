/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#BC231D",
        text: "#151515",
        box: "#EEEDEB",
      },
      fontFamily: {
        "clash-display": ["ClashDisplay", "sans-serif"],
        "clash-display-variable": ["ClashDisplay-Variable", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        "fira-code": ["Fira Code", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-7px)" },
        },
      },
    },
  },
  plugins: [],
};
