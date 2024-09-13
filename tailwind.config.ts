import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px',
        screens: {
          '2xl': '1232px'
        },
      },
      screens: {
        xs: "350px",

        xsm: "480px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        xxl: "1920px",
        // => @media (min-width: 1920px) { ... }

        uw: "2100px",
      },

      transitionProperty: {
        filter: "filter",
      },
      colors: {
        'm-gray': "#717171",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],

};
export default config;
