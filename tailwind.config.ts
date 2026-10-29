import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2fb",
          100: "#d6deee",
          200: "#a8b6d6",
          300: "#7a8ebf",
          400: "#4d68a8",
          500: "#2e4b8c",
          600: "#1f3a73",
          700: "#162d5b",
          800: "#0f2147",
          900: "#0a1733",
          950: "#060e22",
        },
        sun: {
          50: "#fdf6ec",
          100: "#f7e6c6",
          200: "#eecf94",
          300: "#dcb05e",
          400: "#c89238",
          500: "#b07820",
          600: "#92611a",
          700: "#754d18",
          800: "#5b3c16",
          900: "#473012",
        },
        ocean: {
          50: "#eef6fb",
          100: "#cfe5f1",
          200: "#9ec9e2",
          300: "#6dadd2",
          400: "#3f90bf",
          500: "#2774a3",
          600: "#1d5c84",
          700: "#174968",
          800: "#103551",
          900: "#0b2238",
        },
        mist: {
          50: "#F4F6FA",
          100: "#E9EDF4",
          200: "#D5DCE8",
        },
        cream: {
          50: "#F4EFE6",
          100: "#EDE6D6",
          200: "#E1D6BE",
          300: "#CDBE9E",
        },
        sand: {
          50: "#F4EFE6",
          100: "#EDE6D6",
          200: "#E1D6BE",
        },
        clay: {
          50: "#EFE7DA",
          100: "#E3D7C2",
          200: "#C9B696",
          300: "#A8916B",
        },
        ink: {
          DEFAULT: "#0F2147",
          soft: "#3F4347",
          muted: "#5b6066",
        },
      },
      fontFamily: {
        display: ["var(--font-heading)", "var(--font-sans)", "ui-sans-serif", "sans-serif"],
        heading: ["var(--font-heading)", "var(--font-sans)", "ui-sans-serif", "sans-serif"],
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8.5vw, 8rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.75rem, 5.5vw, 5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2.25rem, 4.2vw, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
      },
      letterSpacing: {
        editorial: "-0.035em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,33,71,.04), 0 8px 24px rgba(15,33,71,.05)",
        card: "0 2px 4px rgba(15,33,71,.04), 0 12px 32px rgba(15,33,71,.07)",
        glow: "0 8px 24px rgba(176,120,32,.18)",
      },
      backgroundImage: {
        "navy-gradient":
          "linear-gradient(180deg, #0a1733 0%, #0f2147 100%)",
        "sun-gradient":
          "linear-gradient(135deg, #c89238 0%, #b07820 50%, #92611a 100%)",
        "hero-radial":
          "radial-gradient(70% 60% at 30% 20%, rgba(176,120,32,.06) 0%, rgba(176,120,32,0) 60%), radial-gradient(60% 60% at 80% 30%, rgba(15,33,71,.05) 0%, rgba(15,33,71,0) 60%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp .8s cubic-bezier(.21,.62,.31,1) both",
        "fade-in": "fadeIn .8s ease-out both",
        "scale-in": "scaleIn .6s cubic-bezier(.21,.62,.31,1) both",
        marquee: "marquee 50s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(.21,.62,.31,1)",
      },
    },
  },
  plugins: [],
};

export default config;
