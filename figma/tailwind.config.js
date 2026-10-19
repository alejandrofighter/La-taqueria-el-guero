/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        masa: "#fbf3e7",
        tarjeta: "#fffdf9",
        tinta: "#2b1b12",
        "tinta-suave": "#6b5646",
        chile: "#c1440e",
        "chile-oscuro": "#8f3009",
        oro: "#b8873a",
        "oro-oscuro": "#8a641f",
        dia: "#2f7fb8",
        noche: "#313a63",
        borde: "#e7d9c4",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        shake: "shake 0.3s ease",
      },
    },
  },
  plugins: [],
};
