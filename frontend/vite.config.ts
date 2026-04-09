import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    target: "es2020",
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
    global: "globalThis",
  },
});
