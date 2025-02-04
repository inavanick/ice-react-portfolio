/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "background-color": "#1a1a1a",
        "nav-color": "#72777B",
        "nav-popup-color": "#869096",
        "silver-color": "#c5c9cd",
        "baby-blue": "#89CFF0",
        blue: "#0096FF",
        red: "#ff4d4d",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-silver":
          "linear-gradient(90deg, #C5C9Cd 14.53%, #72777B 59.36%, #C5C9Cd 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush-silver-1.png')",
        person1: "url('./assets/person-1.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
