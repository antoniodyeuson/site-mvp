import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Verifica arquivos no App Router
    "./src/components/**/*.{js,ts,jsx,tsx}", // Verifica arquivos de componentes
    "./src/styles/**/*.{css}", // Verifica arquivos CSS personalizados
  ],
  theme: {
    extend: {
      colors: {
        navy: "#000080", // Azul Navy
        lightblue: "#6495ED", // Azul Cornflower
        highlight: "#ESB449", // Amarelo
      },
    },
  },
  plugins: [],
} satisfies Config;
