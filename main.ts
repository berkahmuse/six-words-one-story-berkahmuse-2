// Six Words, One Story — entry for @berkahmuse-2
// make.fun competition: u-deranalabs-six-words-one-story-f982e410
// Writes one complete six-word story to /output/entry.txt.
// Deterministic: the same bytes on every run (no input, no time, no randomness).
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "The astronaut waved. Nobody waved back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
