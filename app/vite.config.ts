import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
  },
  assetsInclude: ["**/*.mov", "**/*.mp4"],
  optimizeDeps: {
    exclude: [
      "firebase",
      "firebase/app",
      "firebase/auth",
      "firebase/firestore",
      "firebase/analytics",
    ],
  },
  define: {
    // global: {},
    "process.env": {},
  },

  resolve: {
    alias: {
      url: "url",
      os: "os-browserify",
    },
  },
});
