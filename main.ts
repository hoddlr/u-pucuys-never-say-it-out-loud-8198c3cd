import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I checked nothing. I just wrote it the way true things sound.";

if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line must be 1-200 characters on one line, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
