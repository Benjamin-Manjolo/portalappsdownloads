import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    host: "0.0.0.0", // 👈 Listen on all interfaces
    port: 3000, // 👈 Optional: use a fixed port
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
