/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
      poppins: ["Poppins"],
    },
    extend: {
      width: {
        a4: "210mm",
      },
      height: {
        a4: "297mm",
      },
    },
  },
  plugins: [],
};
