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
        'background': '#121212', // Rich Black
        'surface': '#1E1E1E', // Deep Charcoal Gray
        'primary': '#D4AF37', // Royal Gold
        'secondary': '#B0B0B0', // Luxury Gray (Platinum/Silver)
        'emerald-dark': '#046A38', // Deep Emerald Green
        'royal-blue': '#0077B6', // Deep Sapphire
        'text-primary': '#FFFFFF', // Elegant White
        'text-secondary': '#A5A5A5', // Soft Silver
        'text-muted': '#888888', // Subtle Luxury Gray
        'success': '#27AE60', // Emerald Green
        'error': '#E63946', // Luxury Red
        'warning': '#EFB810', // Golden Yellow
        'accent-hover':"#2C2C2C"

    
  },

      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        garamond: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'lux-gold': '0px 4px 12px rgba(201, 162, 39, 0.5)', // Gold Glow
        'lux-white': '0px 4px 12px rgba(255, 255, 255, 0.2)', // Soft White Glow
      },
    },
  },
  plugins: [],
} satisfies Config;

