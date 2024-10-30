import { defineConfig } from "vite";
import { vanillaExtractPlugin as vanillaExtract } from "@vanilla-extract/vite-plugin";
import solid from "vite-plugin-solid";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vanillaExtract(),
    solid(),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
})