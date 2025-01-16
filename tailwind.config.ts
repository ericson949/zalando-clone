import type { Config } from "tailwindcss";
const Unfonts = require("unplugin-fonts");

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        tiempos: ["Tiempos"],
        helveticaNow: ['Helvetica'],
      },
    },
  },
  plugins: [],
} satisfies Config;
