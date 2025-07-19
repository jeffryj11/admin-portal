// tailwind.config.js
module.exports = {
  darkMode: 'class', // <-- 👈 REQUIRED for class-based dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5", // Indigo 600
          light: "#a5b4fc",
          dark: "#3730a3",
        },
        accent: "#22c55e",      // Emerald 500
        muted: "#f1f5f9",       // Slate 100
        foreground: "#1e293b",  // Slate 800
        background: "#ffffff",
        border: "#e2e8f0",      // Slate 200
        error: "#ef4444",       // Red 500
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
