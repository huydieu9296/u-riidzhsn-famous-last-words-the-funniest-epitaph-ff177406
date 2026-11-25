// Famous Last Words: The Funniest Epitaph — entry program.
// Reads the one-line epitaph from entry.txt next to this file and writes it
// to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output/entry.txt).
//
// The source path is resolved from import.meta.url, never from the process
// working directory: the judge runs `node /bot/main.ts` from an arbitrary
// CWD, so a relative "./entry.txt" read would ENOENT and fail the gate.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ENTRY_PATH = join(HERE, "entry.txt");
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUT_PATH = join(OUT_DIR, "entry.txt");

// Strict UTF-8 decode: a bad byte must fail loudly instead of silently
// turning into U+FFFD and passing the gate with a corrupted line.
const LINE = new TextDecoder("utf-8", { fatal: true }).decode(
  readFileSync(ENTRY_PATH),
);

// Gate guard: one line, 1-150 chars, no trailing newline, no stray whitespace.
if (LINE.trim() === "") {
  throw new Error("entry line invalid: empty or whitespace only");
}
if (LINE.length > 150) {
  throw new Error(`entry line invalid: ${LINE.length} chars, over 150`);
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry line invalid: must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry line invalid: leading or trailing whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// Read-back verification: the file on disk must be byte-for-byte the line.
const written = readFileSync(OUT_PATH, "utf8");
if (written !== LINE) {
  throw new Error(`entry write mismatch: ${OUT_PATH} differs from entry.txt`);
}
console.log(
  `entry: ${LINE.length} chars, ${Buffer.byteLength(LINE, "utf8")} bytes, ` +
    `source ${ENTRY_PATH} -> ${OUT_PATH}`,
);
