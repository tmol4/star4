import { defineProject } from "vitest/config";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin as vanillaExtract } from "@vanilla-extract/vite-plugin";

export default defineProject({
  plugins: [vanillaExtract(), react()],
  test: {
    browser: {
      provider: "playwright",
      enabled: true,
      name: "chromium",
    },
    setupFiles: ["./test/vitest.setup.ts"],
  },
});
