#!/usr/bin/env node

import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { build } from "esbuild";

const root = process.cwd();
const outDir = path.join(root, ".build", "auro-worker");
const entry = path.join(root, "src", "worker.ts");
const outfile = path.join(outDir, "worker.js");

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const aliases = {
  "@": path.join(root, "src"),
  "@omniroute/open-sse": path.join(root, "open-sse"),
};

const aliasPlugin = {
  name: "auroomni-aliases",
  setup(buildApi) {
    buildApi.onResolve({ filter: /^@\// }, args => ({
      path: path.join(aliases["@"], args.path.slice(2)),
    }));
    buildApi.onResolve({ filter: /^@omniroute\/open-sse(?:\/(.*))?$/ }, args => ({
      path: path.join(
        aliases["@omniroute/open-sse"],
        args.path.replace(/^@omniroute\/open-sse\/?/, "")
      ),
    }));
  },
};

await build({
  entryPoints: [entry],
  outfile,
  bundle: true,
  format: "esm",
  platform: "neutral",
  target: "es2022",
  conditions: ["worker", "browser", "import"],
  mainFields: ["browser", "module", "main"],
  plugins: [aliasPlugin],
  sourcemap: false,
  metafile: path.join(outDir, "meta.json"),
  legalComments: "none",
  treeShaking: true,
  logLevel: "info",
});

console.log("[auro-worker] Built:", path.relative(root, outfile));
