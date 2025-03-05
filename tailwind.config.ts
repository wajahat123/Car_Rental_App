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
        background: "#0b0f23", //deep blue
        text: "#fcf6de", //creme
        surface: "#182949", //blue
        primary: "#ffbe00", //rich orange
        secondary: "#fbd365", //light orange
        muted: "#888888", //gray
        accent: "#ffffff",

        // background: '#0b0f23',
        // surface: '#3A4A6B',
        // primary: '#D4AF37',
        // secondary: '#F5F5F5',
        // royalBlue: '#1A73E8',
        // textPrimary: '#FFFFFF',
        // textSecondary: '#CCCCCC',
        // textMuted: '#999999',
        // success: '#34A853',
        // error: '#EA4335',
        // warning: '#FBBC05',
        // accentHover: '#444444',
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
