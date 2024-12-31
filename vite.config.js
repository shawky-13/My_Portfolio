import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/CodeAlpha_My_Portfolio_Site/",
  plugins: [react()],
});
