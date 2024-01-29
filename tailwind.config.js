/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      colors: {
        appBlack: "#1D1D1D",
        applightBlack: "#262626",
        appGray: "#e5e5e5",
        applightGray: "#676767",
        appPaleGray: "#626262",
        appOrange: "#FF4B26",
      },
    },
  },
  plugins: [],
};
