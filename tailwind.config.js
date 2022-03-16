const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["src/**/*.html", "src/scripts/**/*.js"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",

        gray: {
          100: "#fff",
          200: "#fff",
          300: "#fff",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1.5rem",
        },
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        base: ["16px", "24px"],
        lg: ["18px", "24px"],
        xl: ["20px", "26px"],
        "2xl": ["22px", { letterSpacing: "-0.4px", lineHeight: 1.25 }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
