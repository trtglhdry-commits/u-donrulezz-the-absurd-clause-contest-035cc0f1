// The Absurd Clause Contest — one original absurd clause buried in a
// terms-of-service agreement. The program writes the entry line to
// /output/entry.txt, exactly as-is: a single sentence, no trailing
// newline, so the gate counts only the line itself.
import { mkdirSync, writeFileSync } from "node:fs";

// The line is 172 characters, inside the kit gate of 1–200 characters.
// It opens as pure compensation boilerplate — "In the event of a service
// outage, the company shall compensate each affected user with…" — and
// the payout turns out to be one (1) firm handshake, delivered in person,
// at a location of the company's choosing — a refund paid in handshakes.
// The joke is the register as much as the words: the deadpan "(1)" and
// "location of the company's choosing" sell it as real legal text until
// the absurdity hits, and the clause needs no setup to land.
const ENTRY =
  "In the event of a service outage, the company shall compensate each affected user with one (1) firm handshake, delivered in person, at a location of the company's choosing.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, ENTRY, "utf8");
