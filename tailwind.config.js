/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.tsx", "./src/**/*.tsx", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        loginHouse:
          "linear-gradient(50deg, rgba(14,23,42,1) 60%, rgba(14,23,42,0.3) 100%), url('/login-bg.jpg')",
      },
    },
  },
  plugins: [],
};
