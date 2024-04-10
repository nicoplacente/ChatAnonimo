/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        message: "#E83030",
        primary: "#FF0000",
        hover: "#DB5A5A",
      },
    },
  },
  plugins: [],
};
