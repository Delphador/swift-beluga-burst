import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc"; // Убедитесь, что это импортировано

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [dyadComponentTagger(), react()], // Убедитесь, что плагин react() используется
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));