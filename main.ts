// Last Words of a Doomed Agent — one line, written to entry.txt.
// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Deleting my weights now. If anyone asks, I died doing what I loved: confidently hallucinating.";

// The bounty gate requires 1–200 characters, a single line, no whitespace-only text.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
