const WEIGHT = [
  "regular",
  "medium",
  "bold",
] as const;

export const TYPEFACE = [
  "plain", "brand",
  { weight: WEIGHT },
] as const;

