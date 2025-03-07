import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //Logo Colors
        // background: "#12213e", //deep blue
        // surface: "#062c78", //blue
        // primary: "#ff6604", //rich orange
        // // secondary: "#fe7f10", //light orange
        // text: "#fcf6de", //creme
        // muted: "#888888", //gray
        // accent: "#ffffff",//white

        //Royal blue
        background: "#000080",
        primary: "#FF8C00",
        surface: "#0000FF",
        secondary: "#FFA500",
        text: "#fcf6de", //creme
        muted: "#888888", //gray
        accent: "#ffffff",//white
       
      //  //Custom Changes
      //  background: "#050354", //deep blue
      //  text: "#fcf6de", //creme
      //  surface: "#0b0d7d", //blue
      //  primary: "#ffbe00", //rich orange
      //  secondary: "#fbd365", //light orange
      //  muted: "#888888", //gray
      //  accent: "#ffffff",
      },
      screens: {
        xs: "480px", // Extra small devices (Custom)
        sm: "640px", // Small (Default Tailwind)
        md: "768px", // Medium (Default Tailwind)
        ml: "908px", // Medium (Default Tailwind)
        lg: "1024px", // Large (Default Tailwind)
        xl: "1280px", // Extra Large (Default Tailwind)
        "2xl": "1536px", // 2X Large (Default Tailwind)
      },

      fontFamily: {
        serif: ["Playfair Display", "serif"],
        garamond: ["Cormorant Garamond", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "lux-gold": "0px 4px 12px rgba(198, 153, 86, 0.5)",
        "lux-white": "0px 4px 12px rgba(0, 20, 50, 0.2)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
