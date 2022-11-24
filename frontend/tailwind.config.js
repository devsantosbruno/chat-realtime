/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        // loginHouse: "url('/login-bg.jpg')",
        loginHouse:
          "linear-gradient(50deg, rgba(14,23,42,1) 60%, rgba(14,23,42,0.3) 100%), url('/login-bg.jpg')",
      },
    },
  },
  plugins: [],
});
