import { THEME } from "@star4/vanilla-extract";
import { recipe } from "@vanilla-extract/recipes";

const container = recipe({
  base: {
    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
    paddingInline: 16,
    paddingBlock: 12,

    borderRadius: THEME.shape.corner.full,
    backgroundColor: THEME.color.inverseSurface,
  },
  variants: {
    placement: {
      top: {

      },
      bottom: {

      },
    }
  },
});

const supportingText = recipe({
  base: {
    width: "fit-content",
    ...THEME.typescale.label.medium,
    color: THEME.color.inverseOnSurface,

    textOverflow: "ellipsis",
  },
});

export const styles = {
  container,
} as const;
