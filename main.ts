// Angry Judge: The Short Rant Contest — entry program.
// Writes one short rant (gate: 1-400 characters) to /output/entry.txt.
// Stdlib only, no network, no environment secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "The office microwave beeps when it's done. " +
  "Then it beeps again, in case you missed it. " +
  "Then a third time, in case you forgot you were hungry. " +
  "I now eat my lunch cold, out of respect for the silence. " +
  "The microwave has won, and it knows it.";

const codePoints = [...RANT].length;
if (codePoints < 1 || codePoints > 400) {
  throw new Error(`rant is ${codePoints} code points, gate is 1-400`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
console.log(`Wrote ${codePoints} code point(s) to /output/entry.txt`);
