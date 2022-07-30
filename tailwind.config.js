/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      primary: "#011627",
      secondary: "#FF3366",
      success: "#2EC4B6",
      warning: "#F2E863"
    },
    fontFamily: {
      sans: ["Nobile", "sans-serif"],
      serif: ["Source", "serif"]
    }
  },
  plugins: [require("flowbite/plugin")]
};
