import { defineConfig } from "tsup";
import { vanillaExtractPlugin as vanillaExtract } from "@vanilla-extract/esbuild-plugin";
// import { generatePackageExports, generateTsupOptions, parsePresetOptions, writePackageJson, type PresetOptions } from "tsup-preset-solid";

// const PRESET_OPTIONS: PresetOptions = {
//   entries: [
//     {
//       entry: "src/index.ts",
//       dev_entry: true,
//     },
//   ],
//   drop_console: true,
//   cjs: true,
// };

// const CI =
//   process.env.CI === "true" ||
//   process.env.GITHUB_ACTIONS === "true" ||
//   process.env.CI === "\"1\""" ||
//   process.env.GITHUB_ACTIONS === "\"1\""


// export default defineConfig(config => {
//   const watching = !!config.watch;
//   const parsedOptions = parsePresetOptions(PRESET_OPTIONS, watching);

//   if(!watching && !CI) {
//     const packageFields = generatePackageExports(parsedOptions);
//     writePackageJson(packageFields);
//   }

//   console.dir(generateTsupOptions(parsedOptions), { depth: null });

//   return generateTsupOptions(parsedOptions);
// });

export default defineConfig(config => {
  const watching = !!config.watch;
  return {
    target: 'esnext',
    platform: "browser",
    format: watching ? "esm" : ["esm", "cjs"],
    clean: !watching, // && i === 0 for the first config
    dts: true,
    entry: ["src/**/*.ts"],
    outDir: "dist",
    treeshake: watching ? false : { preset: "safest" },
    replaceNodeEnv: true,
    bundle: false,
    minify: !watching,
  };
});
