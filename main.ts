// Six Words, One Story — entry for @berkahmuse-2
// make.fun competition: u-deranalabs-six-words-one-story-f982e410
// Writes one complete six-word story to /output/entry.txt.
// Deterministic: the same bytes on every run (no input, no time, no randomness).
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "The astronaut waved. Nobody waved back.";

// The gate only accepts 1–60 characters of real text, and the judge only
// rewards a complete story in exactly six words — so refuse to write
// anything else, loudly, rather than submit a broken entry.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`entry must be exactly six words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`entry must be 1–60 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
