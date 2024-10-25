import { defineConfig, type Options } from "tsup";
import { solidPlugin as solid } from "esbuild-plugin-solid";
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
    entry: ["src/**/*.{ts,tsx}"],
    outDir: "dist",
    treeshake: watching ? false : { preset: "safest" },
    bundle: false,
    minify: !watching,
    replaceNodeEnv: true,
    esbuildOptions(options) {
      // es_options.define = {
      //     ...es_options.define,
      //     'process.env.NODE_ENV': type.dev ? `"development"` : `"production"`,
      //     'process.env.PROD': type.dev ? 'false' : 'true',
      //     'process.env.DEV': type.dev ? 'true' : 'false',
      //     'process.env.SSR': type.server ? 'true' : 'false',
      //     'import.meta.env.NODE_ENV': type.dev ? `"development"` : `"production"`,
      //     'import.meta.env.PROD': type.dev ? 'false' : 'true',
      //     'import.meta.env.DEV': type.dev ? 'true' : 'false',
      //     'import.meta.env.SSR': type.server ? 'true' : 'false',
      // }
      options.jsx = "preserve";

      options.chunkNames = "[name]/[hash]";

      // if (!type.dev && options.drop_console) options.drop = ['console', 'debugger']

      // return options.modify_esbuild_options(options, item)
    },
    outExtension: ({ format }) => ({}),
    esbuildPlugins: [
      // vanillaExtract(),
      solid({ solid: { generate: "dom" } }),
      ...config.esbuildPlugins ?? [],
    ],
  };
});
