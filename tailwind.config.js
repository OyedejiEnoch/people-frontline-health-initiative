/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const relumeTailwind = require("@relume_io/relume-tailwind");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [relumeTailwind],
  theme: {
    extend: {
      // Re-point gradients so from-*/via-*/to-* keep working for our colors.
      gradientColorStops: ({ theme }) => theme("colors"),

      fontFamily: {
        sans: ["var(--font-hanken)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "var(--font-hanken)", "sans-serif"],
      },

      // PFHI semantic palette. Everything is driven by CSS variables (RGB
      // triplets) so a future brand color is a ONE-LINE change in globals.css.
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        "paper-2": "rgb(var(--paper-2) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-2": "rgb(var(--ink-2) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-foreground": "rgb(var(--accent-foreground) / <alpha-value>)",
        line: "rgb(var(--ink) / 0.12)",
        // Relume components read these scheme tokens.
        scheme: {
          background: "rgb(var(--paper) / <alpha-value>)",
          foreground: "rgb(var(--paper) / <alpha-value>)",
          text: "rgb(var(--ink) / <alpha-value>)",
          border: "rgb(var(--ink) / 0.12)",
          "btn-text": "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        // Relume's default button/ghost variants reference neutral-darkest.
        neutral: {
          darkest: "rgb(var(--ink) / <alpha-value>)",
        },
      },

      fontSize: {
        h1: ["4rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h2: ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h3: ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        h4: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h5: ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        h6: ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        large: ["1.25rem", { lineHeight: "1.6" }],
        medium: ["1.125rem", { lineHeight: "1.6" }],
        regular: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        tiny: ["0.75rem", { lineHeight: "1.5" }],
      },

      borderRadius: {
        button: "9999px",
        card: "1.25rem",
        image: "1.25rem",
        form: "0.625rem",
        badge: "9999px",
        checkbox: "0.375rem",
        carousel: "1rem",
        dropdown: "0.875rem",
      },

      maxWidth: {
        container: "80rem",
      },

      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
};
