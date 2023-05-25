/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      // "dark",
      // "light",
      // "cupcake",
      {
        myTheme: {
          primary: "#f7cc32",

          secondary: "#f2f2f2",

          accent: "#f3f4f6",

          black: "#000",

          neutral: "#1D212A",

          "base-100": "#ffffff",

          info: "#688ECF",

          success: "#28A481",

          warning: "#f2f2f2",

          error: "#881337",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
