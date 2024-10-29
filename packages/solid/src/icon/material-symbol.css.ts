import { THEME } from "@star4/vanilla-extract";
import { createThemeContract, fallbackVar, style } from "@vanilla-extract/css";

const fontVariationSettings = (values: Record<string, string | number>) => {
  return Object.entries(values)
    .map(([axis, value]) => `"${axis}" ${value}`)
    .join(",");
}

const icon = style({
  fontFamily: fallbackVar(THEME.component.materialSymbol.font, `"Material Symbols Rounded"`),
  fontSize: fallbackVar(THEME.component.icon.size, "24px"),

  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: "normal",
  textTransform: "none",
  display: "inline-block",
  whiteSpace: "nowrap",
  wordWrap: "normal",
  direction: "ltr",
  WebkitFontSmoothing: "antialiased",
  fontFeatureSettings: `"liga"`,

  color: "currentcolor",

  inlineSize: fallbackVar(THEME.component.icon.size, "24px"),
  blockSize: fallbackVar(THEME.component.icon.size, "24px"),
  userSelect: "none",

  transitionProperty: "font-variation-settings",
  transitionDuration: "inherit",
  transitionDelay: "inherit",
  transitionTimingFunction: "inherit",

  fontVariationSettings: fontVariationSettings({
    FILL: fallbackVar(THEME.component.materialSymbol.fill, "0"),
    wght: fallbackVar(THEME.component.materialSymbol.weight, "400"),
    GRAD: fallbackVar(THEME.component.materialSymbol.grade, "0"),
    opsz: fallbackVar(THEME.component.materialSymbol.opticalSize, "24"),
  }),
});

export const styles = {
  icon,
} as const;
