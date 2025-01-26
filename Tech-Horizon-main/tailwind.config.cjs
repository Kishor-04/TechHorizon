/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "gradient-purple": {
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        "gradient-blue": "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
        "gradient-red": "linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "card-lg": "0px 50px 150px -20px #211e35",
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
      borderWidth: {
        3: "3px",
        5: "5px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      screens: {
        xs: "450px",
        "2xl": "1440px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "footer-texture": "url('/src/assets/footer-texture.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-thin": {
            "scrollbar-width": "thin",
            "&::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(0, 0, 0, 0.1)",
            },
            "&::-webkit-scrollbar-thumb": {
              background:
                "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              borderRadius: "4px",
            },
          },
          ".scrollbar-none": {
            "scrollbar-width": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        },
        ["responsive"]
      );
    },
  ],
};
