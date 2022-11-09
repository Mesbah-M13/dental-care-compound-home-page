import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Modal from "react-modal";
// Modal = require('react-modal');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    external: ["react-modal"],
  },
});
