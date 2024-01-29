import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA(),react()],
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
