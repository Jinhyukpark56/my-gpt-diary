import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  sever: {
    port: 3000,
    hot: "0.0.0.0",
  },
});
