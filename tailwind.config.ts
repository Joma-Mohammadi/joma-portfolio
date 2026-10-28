import type { Config } from "tailwindcss";

const withAlpha = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: withAlpha("--bg"),
        surface: withAlpha("--surface"),
        fg: withAlpha("--fg"),
        muted: withAlpha("--muted"),
        line: withAlpha("--line"),
        electric: withAlpha("--blue"),
        aqua: withAlpha("--cyan"),
        ultra: withAlpha("--violet"),
        magenta: withAlpha("--magenta"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
