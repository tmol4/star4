import { THEME } from "@star4/vanilla-extract";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const RESET = {
  outline: "none",
  background: "none",
  border: "none",
  cursor: "inherit",
  padding: 0,
  margin: 0,
  textAlign: "unset",
  textDecoration: "none",
} as const;

const container = recipe({
  base: {
    ...RESET,
    WebkitTapHighlightColor: "transparent",
    // overflow: "hidden",

    position: "relative",
    minWidth: "inherit",
    width: "100%",
    maxWidth: "inherit",
    minHeight: 56,

    display: "flex",
    alignItems: "center",
    gap: 16,

    paddingInline: 16,
    paddingBlock: 8,

    textOverflow: "ellipsis",
  },
  variants: {
    lines: {
      1: {
        minHeight: 56,
        paddingBlock: 8,
      },
      2: {
        minHeight: 72,
        paddingBlock: 8,
      },
      3: {
        minHeight: 88,
        alignItems: "flex-start",
        paddingBlock: 12,
      },
    }
  },
});

const focusRing = style({
  borderRadius: THEME.shape.corner.small,
});

const leading = style({
  color: THEME.color.onSurface,
});

const text = style({
  flex: 1,
  overflow: "hidden",

  display: "flex",
  flexDirection: "column",
});


const overline = style({
  ...THEME.typescale.label.small,
  color: THEME.color.onSurfaceVariant,
  textOverflow: "ellipsis",
  overflow: "hidden",
});

const headline = style({
  ...THEME.typescale.body.large,
  color: THEME.color.onSurface,
  textOverflow: "ellipsis",
  overflow: "hidden",
});

const supportingText = recipe({
  base: {
    ...THEME.typescale.body.large,
    color: THEME.color.onSurfaceVariant,
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  variants: {
    multiline: {
      false: {

      },
      true: {

      },
    },
  },
});

const trailing = style({
  color: THEME.color.onSurfaceVariant,
});

export const styles = {
  container,
  focusRing,
  leading,
  text,
  overline,
  headline,
  supportingText,
  trailing,
} as const;
