import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f8f9ff",
        surface: "#f8f9ff",
        "surface-dim": "#d1dbec",
        "surface-bright": "#f8f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eef4ff",
        "surface-container": "#e5eeff",
        "surface-container-high": "#dfe9fa",
        "surface-container-highest": "#d9e3f4",
        "surface-variant": "#d9e3f4",
        "on-surface": "#121c28",
        "on-surface-variant": "#5a413d",
        "on-background": "#121c28",
        outline: "#8e706c",
        "outline-variant": "#e2bfb9",

        primary: "#570000",
        "primary-container": "#800000",
        "on-primary": "#ffffff",
        "on-primary-container": "#ff8371",

        secondary: "#7b5800",
        "secondary-container": "#fdc34d",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#715000",

        tertiary: "#272626",
        "tertiary-container": "#3d3c3c",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#a8a6a6",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")]
} satisfies Config;

