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
        background: '#0d1228',
        surface: '#13213E',
        primary: '#c69956',
        secondary: '#edc589',
        textPrimary: '#f0efea',
        textSecondary: '#CCCCCC',
        textMuted: '#999999',
        success: '#34A853',
        error: '#EA4335',
        warning: '#FBBC05',
        accentHover: '#242c35', 
        accent:"#4E6086"
  
  },screens: {
    'xs': '480px',  // Extra small devices (Custom)
    'sm': '640px',  // Small (Default Tailwind)
    'md': '768px',  // Medium (Default Tailwind)
    'ml': '908px',  // Medium (Default Tailwind)
    'lg': '1024px', // Large (Default Tailwind)
    'xl': '1280px', // Extra Large (Default Tailwind)
    '2xl': '1536px' // 2X Large (Default Tailwind)
  },

      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        garamond: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'lux-gold': '0px 4px 12px rgba(198, 153, 86, 0.5)',
        'lux-white': '0px 4px 12px rgba(0, 20, 50, 0.2)',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;

