/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a10",
        "bg-raised": "#111118",
        "bg-card": "#15151f",
        border: "rgba(255,255,255,0.08)",
        "border-strong": "rgba(255,255,255,0.16)",
        ink: "#f2f1f7",
        "ink-dim": "#a5a3b5",
        "ink-faint": "#6d6b80",
        violet: "#8b5cf6",
        "violet-bright": "#a78bfa",
        "violet-deep": "#6d28d9",
        coral: "#fb8562",
        "coral-bright": "#ff9d7a",
        success: "#4ade80",
      },
      fontFamily: {
        display: ["'Outfit'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        brand: "linear-gradient(120deg, #8b5cf6 0%, #fb8562 100%)",
      },
      borderRadius: {
        md2: "14px",
        lg2: "22px",
      },
      maxWidth: {
        wrap: "1180px",
      },
    },
  },
  plugins: [],
};
