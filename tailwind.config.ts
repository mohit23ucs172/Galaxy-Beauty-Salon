import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nude: "#F5EDE3",
        blush: "#E8C4B8",
        rosegold: "#B76E79",
        champagne: "#F7E7CE",
        onyx: "#1A1A1A",
        ivory: "#FDFAF6",
        mink: "#8B6F6F",
        pearl: "#F2EDE9",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "luxury-gradient":
          "linear-gradient(135deg, #F5EDE3 0%, #F7E7CE 30%, #E8C4B8 60%, #B76E79 100%)",
        "dark-gradient":
          "linear-gradient(135deg, #1A1A1A 0%, #2D1B1B 50%, #1A0F0F 100%)",
        "hero-gradient":
          "linear-gradient(to bottom, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.4) 50%, rgba(26,26,26,0.7) 100%)",
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-medium": "floatMedium 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(183,110,121,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(183,110,121,0.6)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
