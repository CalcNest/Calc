import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        brand: {
          50: "#FFF4E8",
          100: "#FFE6CC",
          200: "#FFCA99",
          300: "#FFAD66",
          400: "#FF9F1C",
          500: "#FF7A00",
          600: "#E86D00",
          700: "#C25900",
          800: "#8F4200",
          900: "#5C2B00",
        },
        ink: {
          50: "#F6F7F9",
          100: "#EAECF0",
          400: "#6B7280",
          600: "#374151",
          800: "#1B1F27",
          900: "#0F1115",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(17, 17, 17, 0.04), 0 8px 24px rgba(17, 17, 17, 0.06)",
        lift: "0 12px 32px rgba(255, 122, 0, 0.18)",
        glass: "0 8px 32px rgba(31, 38, 135, 0.08)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #FF7A00 0%, #FF9F1C 100%)",
        "brand-gradient-radial":
          "radial-gradient(circle at 30% 20%, rgba(255,122,0,0.14), transparent 55%)",
        "mesh": "radial-gradient(at 0% 0%, rgba(255,122,0,0.10) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(255,159,28,0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(255,122,0,0.06) 0px, transparent 50%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite linear",
      },
    },
  },
  plugins: [],
};

export default config;
