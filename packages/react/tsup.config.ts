import { defineConfig, type Options } from "tsup";

export default defineConfig(config => {
  const watching = !!config.watch;
  return {
    target: "esnext",
    platform: "browser",
    format: watching ? "esm" : ["esm", "cjs"],
    clean: !watching, // && i === 0 (for the first config)
    dts: "src/index.ts",
    entry: ["src/**/*.{ts,tsx}"],
    outDir: "dist",
    treeshake: watching ? false : { preset: "safest" },
    bundle: false,
    minify: !watching,
    replaceNodeEnv: true,
  };
});
