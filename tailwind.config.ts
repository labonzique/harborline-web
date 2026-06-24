import type { Config } from "tailwindcss";

/**
 * Harborline Systems design system.
 *
 * Colors are defined as HSL channel triplets in app/globals.css (`--token: H S% L%`)
 * and referenced here through `hsl(var(--token))`. This keeps a single source of
 * truth for the palette and makes future theming (e.g. dark mode) straightforward.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          soft: "hsl(var(--gold-soft))",
          bright: "hsl(var(--gold-bright))",
          cta: "hsl(var(--gold-cta))",
          foreground: "hsl(var(--gold-foreground))",
        },
        dark: {
          DEFAULT: "hsl(var(--dark))",
          foreground: "hsl(var(--dark-foreground))",
          muted: "hsl(var(--dark-muted))",
          border: "hsl(var(--dark-border))",
          card: "hsl(var(--dark-card))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        xl: "calc(var(--radius) + 6px)",
        "2xl": "calc(var(--radius) + 12px)",
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 1px 2px hsl(var(--shadow-color) / 0.04), 0 8px 24px -12px hsl(var(--shadow-color) / 0.12)",
        card: "0 1px 2px hsl(var(--shadow-color) / 0.05), 0 14px 40px -22px hsl(var(--shadow-color) / 0.22)",
        lift: "0 2px 4px hsl(var(--shadow-color) / 0.06), 0 24px 60px -28px hsl(var(--shadow-color) / 0.35)",
        gold: "0 10px 30px -12px hsl(var(--gold-cta) / 0.40)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, hsl(var(--border) / 0.7) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.7) 1px, transparent 1px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-16" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out both",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        "dash-flow": "dash-flow 1.2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
