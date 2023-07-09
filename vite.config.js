import { fileURLToPath, URL } from "node:url";
import { config } from "dotenv"; // Import dotenv

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Load environment variables
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
