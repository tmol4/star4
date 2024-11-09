const _FONT = [
  "fontFamily",
  "lineHeight",
  "fontSize",
  "letterSpacing",
  "fontWeight",
] as const;
const _SCALE = {
  large: _FONT,
  medium: _FONT,
  small: _FONT
} as const;

export const TYPESCALE = {
  display: _SCALE,
  headline: _SCALE,
  title: _SCALE,
  body: _SCALE,
  label: _SCALE
} as const;
