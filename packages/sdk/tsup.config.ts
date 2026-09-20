import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  minify: true,
  treeshake: true,
  target: "node22",
  banner: { js: "// SPDX-License-Identifier: MIT" },
  sourcemap: false,
  outExtension({ format }) {
    return { js: format === "cjs" ? ".cjs" : ".js" };
  },
});
