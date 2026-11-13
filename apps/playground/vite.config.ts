import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const coreEntry = fileURLToPath(
  new URL("../../packages/core/src/index.ts", import.meta.url),
);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ridiormf/react-ridio-form": coreEntry,
    },
    dedupe: ["react", "react-dom"],
  },
  server: {
    port: 5173,
  },
});
