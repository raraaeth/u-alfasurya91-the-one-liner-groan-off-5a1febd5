import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The One-Liner Groan-Off entry.
// Deterministically writes a single one-liner joke to entry.txt.
// No network access, no randomness, no external input.

const LINE: string =
  "I told my suitcase there would be no vacation this year; now I am dealing with emotional baggage.";

function main(): void {
  const outputDir: string = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const target: string = join(outputDir, "entry.txt");
  // Write exactly the line, with no trailing newline.
  writeFileSync(target, LINE, { encoding: "utf8" });
}

main();
