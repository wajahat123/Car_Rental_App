import type { Config } from "tailwindcss";

const luxuryTheme = {
  // Base colors
  background: "#000000", // Pure black
  surface: "#010173", // Deep royal blue
  surface2: "#020295", // Brighter royal blue
  
  // Primary colors
  primary: "#eba800", // Luxury gold
  primary2: "#ffc235", // Bright gold
  
  // Secondary colors
  secondary: "#fbd365", // Light gold
  secondary2: "#ffdb94", // Very light gold

  // Text colors
  text: {
    primary: "#fcf6de", // Cream white for default text
    secondary: "#eba800", // Gold for headings and important text
    muted: "#888888", // Muted text
    light: "#ffffff", // Pure white text
    dark: "#000000", // Black text
    blue: "#010173", // Blue text
  },

  // UI colors
  accent: "#ffffff", // White accents
  muted: "#888888", // Gray elements
  border: {
    light: "#eba800", // Gold borders
    dark: "#010173", // Blue borders
  },

  // Gold palette
  gold: {
    100: '#fff7e6',
    200: '#ffe4b3',
    300: '#ffd180',
    400: '#ffbe4d',
    500: '#eba800', // Base gold
    600: '#cc9200',
    700: '#a67600',
  },

  // Blue palette
  blue: {
    100: '#e6e6ff',
    200: '#b3b3ff',
    300: '#010173', // Base blue
    400: '#020295',
    500: '#000066',
    600: '#000033',
  },

  // Status colors
  status: {
    success: "#4CAF50",
    error: "#f44336",
    warning: "#ff9800",
    info: "#2196f3",
  }
};

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
        ...luxuryTheme,
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
          "gold-sm": "0 2px 6px rgba(235, 168, 0, 0.15)",
          "gold-md": "0 4px 8px rgba(235, 168, 0, 0.25)",
          "gold-lg": "0 12px 20px rgba(235, 168, 0, 0.35)",
          "blue-sm": "0 2px 4px rgba(1, 1, 115, 0.1)",
          "blue-md": "0 4px 6px rgba(1, 1, 115, 0.15)",
          "blue-lg": "0 10px 15px rgba(1, 1, 115, 0.2)",
      
        
        // "gold-sm": "0 2px 4px rgba(235, 168, 0, 0.1)",
        // "gold-md": "0 4px 6px rgba(235, 168, 0, 0.15)",
        // "gold-lg": "0 10px 15px rgba(235, 168, 0, 0.2)",
        // "blue-sm": "0 2px 4px rgba(1, 1, 115, 0.1)",
        // "blue-md": "0 4px 6px rgba(1, 1, 115, 0.15)",
        // "blue-lg": "0 10px 15px rgba(1, 1, 115, 0.2)",
      },
      textColor: {
        DEFAULT: luxuryTheme.text.primary, // This sets the default text color
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
