import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    // ...
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    // screens: {
    //   'laptop': '960px',
    // },
    extend: {},
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs") ,nextui()]
}

export default config;