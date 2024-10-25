import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/**/*.{ts,tsx}"],
    outDir: "dist",
    format: ["esm", "cjs"],
    outExtension: ({ format }) => ({
      js: format === "esm" ? ".mjs" : ".cjs",
      dts: format === "esm" ? ".d.mts" : ".d.cts",
    }),
    bundle: false,
    clean: true,
    minify: false,
    dts: true,
  },
]);
