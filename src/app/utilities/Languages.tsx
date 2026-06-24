export const Lang = {
  EN: "en",
  DE: "de",
  BG: "bg",
  RU: "ru",
} as const;

export type Lang = (typeof Lang)[keyof typeof Lang];