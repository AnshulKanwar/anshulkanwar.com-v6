/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      night: "#171618",
      raisin: "#252127",
      violet: "#4F4455",
      wenge: "#624767",
      rose: "#DACBCF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(#252127, #171618)",
      },
    },
  },
  plugins: [],
};
