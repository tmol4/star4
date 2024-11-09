import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin as vanillaExtract } from "@vanilla-extract/vite-plugin";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vanillaExtract(),
    react(),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
})
