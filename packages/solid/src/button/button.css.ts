import { createThemeContract, style } from "@vanilla-extract/css";
import { THEME } from "@star4/vanilla-extract";

export const host = style({
  height: 40,
  borderRadius: THEME.shape.corner.full,
  color: THEME.color.secondaryContainer,



  textOverflow: "ellipsis",
  textWrap: "nowrap",
  verticalAlign: "top",

  userSelect: "none",
  WebkitTapHighlightColor: "transparent",

});

export const background = style({
  borderRadius: "inherit",

  "@media": {
    "(forced-colors: active)": {
      border: "1px solid CanvasText",
    },
  },
});

export const button = style({
  appearance: "none",
  border: "none",
  outline: "none",
  background: "none",

  cursor: "inherit",
  borderRadius: "inherit",

  width: "100%",
  height: "100%",
  zIndex: 1,

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "inherit",




});
