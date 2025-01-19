import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
export default defineConfig({
  plugins: [react()],
  root: "src",
  publicDir: "../public", // Adjust the path if needed
  proxy: {
    "/api": "http://localhost:3030",
  }
});
