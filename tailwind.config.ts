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
        //1 Skyflare 
        background: "#0d47a1", // Bright deep blue
        surface: "#1976d2", // Sky blue
        primary: "#ff6f00", // Fiery orange
        secondary: "#ff9800", // Warm orange
        text: "#fcf6de", // Creme
        muted: "#888888", // Gray
        accent: "#ffffff", // White

        //2 Cobalt Glow
        // background: "#003c8f" // Cobalt blue
        //, surface: "#005cbf" // Lighter cobalt blue
        //, primary: "#ff9100" // Bright orange
        //, secondary: "#ffb74d" // Warm golden-orange
        //, text: "#fcf6de" // Creme
        //, muted: "#888888" // Gray
        //, accent: "#ffffff" // White

        //3 Ultramarine Blaze
        // background: "#0047ab" // Ultramarine blue
        // ,surface: "#005bbb" // Vivid deep blue
        // ,primary: "#ff7800" // Rich orange
        // ,secondary: "#ffae42" // Golden orange
        // ,text: "#fcf6de" // Creme
        // ,muted: "#888888" // Gray
        // ,accent: "#ffffff" // White

       //4 Cerulean Fire
        // background: "#0074d9" // Cerulean blue
        // ,surface: "#0088ff" // Bright sky blue
        // ,primary: "#ff8200" // Deep orange
        // ,secondary: "#ffb54a" // Soft golden orange
        // ,text: "#fcf6de" // Creme
        // ,muted: "#888888" // Gray
        // ,accent: "#ffffff" // White

       //5 Sapphire Spark
        // background: "#0057b8" // Sapphire blue
        // ,surface: "#007bff" // Electric blue
        // ,primary: "#ff8800" // Vivid orange
        // ,secondary: "#ffc04a" // Soft golden orange
        // ,text: "#fcf6de" // Creme
        // ,muted: "#888888" // Gray
        // ,accent: "#ffffff" // White

       //6 Horizon Flame
        // background: "#1565c0" // Deep sky blue
        //, surface: "#1e88e5" // Bright blue
        //, primary: "#ff6600" // Intense orange
        //, secondary: "#ff9800" // Soft orange
        //, text: "#fcf6de" // Creme
        //, muted: "#888888" // Gray
        //, accent: "#ffffff" // White

       //7 Azure Inferno
        // background: "#007acc" // Vibrant azure
        // ,surface: "#0091ea" // Brighter blue
        // ,primary: "#ff7700" // Fiery orange
        // ,secondary: "#ffab40" // Light orange
        // ,text: "#fcf6de" // Creme
        // ,muted: "#888888" // Gray
        // ,accent: "#ffffff" // White

       //8 Neon Wave
        // background: "#0066cc" // Deep neon blue
        // ,surface: "#0088ff" // Bright neon blue
        // ,primary: "#ff7800" // Neon orange
        // ,secondary: "#ffac33" // Soft neon orange
        // ,text: "#fcf6de" // Creme
        // ,muted: "#888888" // Gray
        // ,accent: "#ffffff" // White

       //9 Aqua Ember
        // background: "#0096c7" // Aqua blue
        // ,surface: "#00b4d8" // Brighter aqua
        // ,primary: "#ff7300" // Bold orange
        // ,secondary: "#ffb000" // Golden orange
        // ,text: "#fcf6de" // Creme
        // ,muted: "#888888" // Gray
        // ,accent: "#ffffff" // White

       //10 Ocean Sunset
        // background: "#0066b2" // Ocean blue
        //, surface: "#0081cf" // Bright sky blue
        //, primary: "#ff6a00" // Deep orange
        //, secondary: "#ffae42" // Golden amber
        //, text: "#fcf6de" // Creme
        //, muted: "#888888" // Gray
        //, accent: "#ffffff" // White

       //11 Skyfire Azure
        // background: "#003366" // Rich deep blue
        // ,surface: "#0055A4" // Bright azure
        // ,primary: "#FF6600" // Bold orange
        // ,secondary: "#FF9933" // Warm golden-orange
        // ,text: "#FAF3E0" // Soft cream
        // ,muted: "#999999" // Medium gray
        // ,accent: "#ffffff" // White

       //12 Blue Inferno
        // background: "#002B5B" // Deep navy blue
        // ,surface: "#005F99" // Vibrant blue
        // ,primary: "#FF7700" // Fiery orange
        // ,secondary: "#FFA533" // Lighter orange
        // ,text: "#F8E8D0" // Warm cream
        // ,muted: "#8C8C8C" // Neutral gray
        // ,accent: "#ffffff" // White

       //13 Aurora Flame
        // background: "#003B73" // Vivid deep blue
        // ,surface: "#0074B7" // Brighter blue
        // ,primary: "#FF6F00" // Bright orange
        // ,secondary: "#FFA040" // Soft warm orange
        // ,text: "#FDF1DC" // Light cream
        // ,muted: "#A0A0A0" // Gray tone
        // ,accent: "#ffffff" // White

       //14 Celestial Glow
        // background: "#001F5B" // Strong deep blue
        //, surface: "#003F87" // Oceanic blue
        //, primary: "#FF8500" // Warm orange
        //, secondary: "#FFB266" // Light amber-orange
        //, text: "#F7F4E3" // Off-white
        //, muted: "#7E7E7E" // Mid-gray
        //, accent: "#ffffff" // White

       //15 Electric Dusk
        // background: "#0B3D91" // Bold electric blue
        // ,surface: "#1565C0" // Vibrant ocean blue
        // ,primary: "#FF7300" // Neon orange
        // ,secondary: "#FFA64D" // Light warm orange
        // ,text: "#FAF5E6" // Cream white
        // ,muted: "#909090" // Muted gray
        // ,accent: "#ffffff" // White

       //16 Azure Inferno 
        // background: "#001233", // Deep space blue
        // surface: "#004494", // Oceanic blue
        // primary: "#ff9500", // Intense orange
        // secondary: "#ffbb33", // Soft golden-orange
        // text: "#fcf6de", // Creme
        // muted: "#888888", // Gray
        // accent: "#ffffff", // White

        //17 Golden Nightfall 
        // background: "#03071e", // Night sky blue
        // surface: "#370617", // Deep blue-red
        // primary: "#ff8800", // Warm golden-orange
        // secondary: "#ffb677", // Sunset orange
        // text: "#fcf6de", // Creme
        // muted: "#888888", // Gray
        // accent: "#ffffff", // White

        //18 Ember Eclipse 
        // background: "#0f172a", // Charcoal blue
        // surface: "#1e293b", // Deep navy
        // primary: "#ff7300", // Vivid orange
        // secondary: "#ff9e40", // Soft orange
        // text: "#fcf6de", // Creme
        // muted: "#888888", // Gray
        // accent: "#ffffff", // White

       //19 Neon Sunset  
        // background: "#080d3a", // Ultra-dark blue
        // surface: "#1a237e", // Royal blue
        // primary: "#ff9800", // Neon orange
        // secondary: "#ffc107", // Bright gold
        // text: "#fcf6de", // Creme
        // muted: "#888888", // Gray
        // accent: "#ffffff", // White

       //20 Deep Horizon  
        // background: "#03045e", // Dark navy
        // surface: "#023e8a", // Deep ocean blue
        // primary: "#ff9000", // Warm orange
        // secondary: "#ffaa33", // Soft orange
        // text: "#fcf6de", // Creme
        // muted: "#888888", // Gray
        // accent: "#ffffff", // White

       //21 Saphire Blaze 
        // background: "#0d1b2a", // Sapphire dark blue
        // surface: "#1b263b", // Midnight blue
        // primary: "#f77f00", // Fiery orange
        // secondary: "#ffba08", // Golden orange
        // text: "#fcf6de", // Creme
        // muted: "#888888", // Gray
        // accent: "#ffffff", // White

       //22 Amber Twilight  
        // background: "#101d42", // Dark twilight blue
        // surface: "#062c78", // Bold blue
        // primary: "#ffae42", // Deep amber
        // secondary: "#ffcf75", // Lighter amber
        // text: "#fcf6de", // Creme
        // muted: "#888888", // Gray
        // accent: "#ffffff", // White

       //23 Cosmic Glow 
        // background: "#07012f", // Deep cosmic blue
        // surface: "#0b0d7d", // Bright blue
        // primary: "#ffcc33", // Golden orange
        // secondary: "#fbd365", // Light gold
        // text: "#fcf6de", // Creme
        // muted: "#888888", // Gray
        // accent: "#ffffff", // White

       //24 Midnight Amber 
        // background: "#0a1128", // Deep midnight blue
        // surface: "#001f54", // Dark blue
        // primary: "#ff8c00", // Vivid orange
        // secondary: "#ffa733", // Lighter orange
        // text: "#fcf6de", // Creme
        // muted: "#888888", // Gray
        // accent: "#ffffff", // White

       //25 Ocean Blaze  
        // background: "#06213e", // Deep ocean blue
        // surface: "#03396c", // Rich navy blue
        // primary: "#ff7f11", // Bright orange
        // secondary: "#fca311", // Golden orange
        // text: "#fcf6de", // Creme
        // muted: "#888888", // Gray
        // accent: "#ffffff", // White

        //   //Logo Colors
        //   // background: "#12213e", //deep blue
        //   // surface: "#062c78", //blue
        //   // primary: "#ff6604", //rich orange
        //  //4 secondary: "#fe7f10", //light orange
        //   // text: "#fcf6de", //creme
        //   // muted: "#888888", //gray
        //   // accent: "#ffffff",//white

        //   //Royal blue
        //   // background: "#000080",
        //   // primary: "#FF8C00",
        //   // surface: "#0000FF",
        //   // secondary: "#FFA500",
        //   // text: "#fcf6de", //creme
        //   // muted: "#888888", //gray
        //   // accent: "#ffffff",//white

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
