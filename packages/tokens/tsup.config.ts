import { defineConfig } from "tsup";

export default defineConfig(config => {
  const watching = !!config.watch;
  return {
    target: "esnext",
    platform: "browser",
    format: watching ? "esm" : ["esm", "cjs"],
    clean: !watching, // && i === 0 (for the first config)
    dts: true,
    entry: ["src/index.ts"],
    outDir: "dist",
    treeshake: watching ? false : { preset: "safest" },
    bundle: true,
    minify: !watching,
    replaceNodeEnv: true,
  };
});
