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
      keyframes: {
        parallax: {
          '0%': {
            objectPosition: 'center',
          },
          '100%': {
            objectPosition: '0 0',
          },
        },
      },
      animation: {
        parallax: 'parallax linear both',
      },
    },
  },
  plugins: [],
} satisfies Config;
