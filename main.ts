import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
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
  // Verify after writing: read the file back and assert it matches exactly.
  const written: string = readFileSync(target, { encoding: "utf8" });
  if (written !== LINE) {
    console.error(`Verification failed: entry.txt content does not match the expected line.`);
    process.exit(1);
  }
}

main();
