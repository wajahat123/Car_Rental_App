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
        background: '#0b0f23',
        surface: '#3A4A6B',
        primary: '#D4AF37',
        secondary: '#F5F5F5',
        royalBlue: '#1A73E8',
        textPrimary: '#FFFFFF',
        textSecondary: '#CCCCCC',
        textMuted: '#999999',
        success: '#34A853',
        error: '#EA4335',
        warning: '#FBBC05',
        accentHover: '#444444',   
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
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;

