/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light Theme Color
        primary: "#FFFFFF",
        secondary: "#ECF0F3",
        tertiary: "#F6F8F9",
        "dark-text": "#111519",
        extra: "#d1d5db",

        // Dark Theme Color
        "dark-primary": "#111519",
        "dark-secondary": "#0C0E11",
        "dark-tertiary": "#1A2026",
        "light-text": "#ffff",

        // Supporting Colors
        accent: "#CC001F",
        beewatch: "#FDE767",
        enviromentrix: "#05BFDB",
        "campus-echo": "#15F5BA",
        "variety-verse": "#F48668",
        ttt: "#92DCE5",
        "supporting-color": "#A6ADBB",
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
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke-width": ".75px",
          "-webkit-text-fill-color": "#F6F8F9",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
