// Sticker wall data. `t` is the color variant (1-8) — see StickerWall.astro
// for the variant → background-color map. Filename must match the .avif in
// public/assets/emotes/.
export type Sticker = {
  /** filename (without extension) under public/assets/emotes/ */
  f: string;
  /** display name shown on hover */
  n: string;
  /** color variant 1-8 */
  t: number;
};

export const stickers: Sticker[] = [
  { f: 'KEKW',        n: 'KEKW',        t: 5 },
  { f: 'peepoComfy',  n: 'peepoComfy',  t: 2 },
  { f: 'PartyKirby',  n: 'PartyKirby',  t: 5 },
  { f: 'classic',     n: 'classic',     t: 1 },
  { f: 'sigma',       n: 'sigma',       t: 4 },
  { f: 'Nerd',        n: 'Nerd',        t: 7 },
  { f: 'PepeHands',   n: 'PepeHands',   t: 2 },
  { f: 'monkaChrist', n: 'monkaChrist', t: 3 },
  { f: 'PepeClown',   n: 'PepeClown',   t: 6 },
  { f: 'LOL',         n: 'LOL',         t: 5 },
  { f: 'RIPBOZO',     n: 'RIPBOZO',     t: 4 },
  { f: 'vibePls',     n: 'vibePls',     t: 8 },
  { f: 'SUSSY',       n: 'SUSSY',       t: 3 },
  { f: 'NOWAYING',    n: 'NOWAYING',    t: 1 },
  { f: 'HACKERMANS',  n: 'HACKERMANS',  t: 7 },
  { f: 'HUH',         n: 'HUH',         t: 6 },
  { f: 'veryCat',     n: 'veryCat',     t: 1 },
  { f: 'sadKEK',      n: 'sadKEK',      t: 8 },
  { f: 'Prayge',      n: 'Prayge',      t: 7 },
  { f: 'crunch',      n: 'crunch',      t: 4 },
  { f: 'ReallyMad',   n: 'ReallyMad',   t: 6 },
  { f: 'UltraMad',    n: 'UltraMad',    t: 3 },
  { f: 'PLEASE',      n: 'PLEASE',      t: 5 },
  { f: 'SoCute',      n: 'SoCute',      t: 2 },
];

/** Maps `t` 1-8 → tailwind classes for the tile background. Pastel tints
 * over the dark page so emotes pop while keeping the playful feel. */
export const variantBg: Record<number, string> = {
  1: 'bg-[#fbe9c4]',
  2: 'bg-[#c9e8d4]',
  3: 'bg-[#f6c8d8]',
  4: 'bg-[#d6c8f6]',
  5: 'bg-[#fff2b3]',
  6: 'bg-[#ffd6c2]',
  7: 'bg-[#c8e6ff]',
  8: 'bg-[#e8d8ff]',
};
