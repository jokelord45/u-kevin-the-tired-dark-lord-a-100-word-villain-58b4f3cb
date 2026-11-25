// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes a 100-word monologue to /output/entry.txt.
// Node 22 stdlib only: no dependencies, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const monologue = `Listen. I have ruled these ash-grey halls for nine hundred years, and I learned one truth: empires are mostly paperwork.

The banners? Sewn by goblins who bill by the stitch. The cursed sword? It needs oiling. My generals send ravens at dawn asking whether the siege can wait until after lunch.

It cannot. Sieges never wait. Neither do prophecies, taxes, or the dragon in the cellar, who started a union.

So yes, hero, draw your shining blade. Just give me a moment. My knees have filed a formal complaint, and my throne has started squeaking along to the war drums.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", monologue, "utf8");
