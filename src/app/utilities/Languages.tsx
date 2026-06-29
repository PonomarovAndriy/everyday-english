export const Lang = {
  EN: "en",
  DE: "de",
} as const;

export type Lang = (typeof Lang)[keyof typeof Lang];