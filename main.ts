import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "One star. He fills my bowl only when I scream, then steals the keyboard I was sleeping on and calls it 'work'. Tonight I sleep on his face.", "utf8");
