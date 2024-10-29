import { THEME } from "@star4/vanilla-extract";
import { createThemeContract, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { theme as iconTheme } from "../icon-old/icon.css";


export const theme = createThemeContract({
  containerColor: "",
  labelTextColor: "",

  hoverStateLayerColor: "",
  hoverStateLayerOpacity: "",

  pressedStateLayerColor: "",
  pressedStateLayerOpacity: "",
});

const container = recipe({
  base: {
    position: "relative",
    minHeight: 40,

    display: "inline-flex",
    placeItems: "center",
    placeContent: "center",
    gap: 8,

    borderRadius: THEME.shape.corner.full,

    outline: "none",

    cursor: "pointer",
    textOverflow: "ellipsis",
    textWrap: "nowrap",
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",
    verticalAlign: "top",

    ...THEME.typescale.label.large,

    vars: {
      [THEME.component.ripple.hoverColor]: theme.hoverStateLayerColor,
      [THEME.component.ripple.hoverOpacity]: theme.hoverStateLayerOpacity,
      [THEME.component.ripple.pressedColor]: theme.pressedStateLayerColor,
      [THEME.component.ripple.pressedOpacity]: theme.pressedStateLayerOpacity,
    },

    // border-start-start-radius: var(--_container-shape-start-start);
    // border-start-end-radius: var(--_container-shape-start-end);
    // border-end-start-radius: var(--_container-shape-end-start);
    // border-end-end-radius: var(--_container-shape-end-end);
    // box-sizing: border-box;
    // cursor: pointer;
    // display: inline-flex;
    // gap: 8px;
    // // min-height instead of height so that label can wrap and expand height
    // min-height: var(--_container-height);
    // outline: none;
    // // Add extra space between label and the edge for if the label text wraps.
    // // The padding added should be relative to the height of the container and
    // // the height of its content on a single line (label or icon, whichever is
    // // bigger).
    // $single-line-height: max(var(--_label-text-line-height), var(--_icon-size));
    // padding-block: calc((var(--_container-height) - $single-line-height) / 2);
    // padding-inline-start: var(--_leading-space);
    // padding-inline-end: var(--_trailing-space);
    // place-content: center;
    // place-items: center;
    // position: relative;
    // font-family: var(--_label-text-font);
    // font-size: var(--_label-text-size);
    // line-height: var(--_label-text-line-height);
    // font-weight: var(--_label-text-weight);
    // // Long labels are cut off with ellipsis by default. `text-overflow` and
    // // `text-wrap` can customize this.
    // text-overflow: ellipsis;
    // text-wrap: nowrap;
    // user-select: none;
    // -webkit-tap-highlight-color: transparent;
    // // Override vertical-align with shortest value "top". Vertical-align's
    // // default "baseline" value causes buttons to be misaligned next to each
    // // other if one button has an icon and the other does not.
    // vertical-align: top;
  },
  variants: {
    hasIcon: {
      false: {
        paddingInline: 24,
      },
      true: {
        paddingInlineStart: 16,
        paddingInlineEnd: 24,
      }
    },
    disabled: {
      true: {
        pointerEvents: "none",
      },
    },
  },
});

const background = recipe({
  base: {
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    backgroundColor: theme.containerColor,

    "@media": {
      "(forced-colors: active)": {
        border: "1px solid CanvasText",
      },
    },
  },
  variants: {
    disabled: {
      true: {

      },
    },
  },
  defaultVariants: {
    disabled: false,
  }
});

export const control = recipe({
  base: {
    width: "100%",
    zIndex: 0,

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "inherit",
    padding: 0,

    appearance: "none",
    border: "none",
    outline: "none",
    background: "transparent",

    cursor: "inherit",
    borderRadius: "inherit",

    textDecoration: "none",
    verticalAlign: "middle",
    textTransform: "inherit",
    font: "inherit",

    color: theme.labelTextColor,

    selectors: {
      "&::-moz-focus-inner": {
        padding: 0,
        border: 0,
      },
    },
  },

  // border-radius: inherit;
  // cursor: inherit;
  // display: inline-flex;
  // align-items: center;
  // justify-content: center;
  // border: none;
  // outline: none;
  // -webkit-appearance: none;
  // vertical-align: middle;
  // background: transparent;
  // text-decoration: none;
  // // Buttons have a default min-width of 64px. This can be overridden by
  // // setting a smaller min-width on the host. The 64px button will be centered
  // // within the bounds of the smaller host element.
  // min-width: calc(64px - var(--_leading-space) - var(--_trailing-space));
  // width: 100%;
  // z-index: 0; // Place content on top of elevation and ripple
  // height: 100%;
  // font: inherit;
  // color: var(--_label-text-color);
  // padding: 0;
  // gap: inherit;
  // // Override the user-agent text-transform: none of <button> and <a>
  // text-transform: inherit;

  // &::-moz-focus-inner {
  //   padding: 0;
  //   border: 0;
  // }
});

const touchTarget = recipe({
  base: {
    position: "absolute",
    left: 0,
    top: "50%",
    right: 0,
    height: 48,
    transform: "translateY(-50%)",
  },
});

const icon = style({
  inlineSize: 18,
  blockSize: 18,
  vars: {
    [iconTheme.size]: "18px",
  },
});

export const styles = {
  container,
  background,
  control,
  touchTarget,
  icon,
} as const;
