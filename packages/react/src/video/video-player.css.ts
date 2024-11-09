import { THEME } from "@star4/vanilla-extract";
import { recipe } from "@vanilla-extract/recipes";

const playButton = recipe({
  base: {
    WebkitTapHighlightColor: "transparent",
    border: "none",
    outline: "none",
    background: "none",
    cursor: "pointer",

    display: "grid",
    placeItems: "center",
    placeContent: "center",

    position: "relative",
    maxWidth: 124,
    width: "100%",
    height: 56,

    backdropFilter: "blur(20px)",

    backgroundColor: "rgba(71, 71, 71, 0.3)",

    transitionProperty: "border-radius, background-color",
    transitionDuration: THEME.motion.duration.short2,
    transitionTimingFunction: THEME.motion.easing.standard,

    overflow: "hidden",
  },
  variants: {
    state: {
      pause: {
        borderRadius: 16,

        ":hover": {
          borderRadius: 28,
        },

        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.primaryContainer,
          [THEME.component.ripple.pressedColor]: THEME.color.primaryContainer,
        },
      },
      play: {
        borderRadius: 28,

        backgroundColor: THEME.color.primary,
        color: THEME.color.onPrimary,

        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.onPrimary,
          [THEME.component.ripple.pressedColor]: THEME.color.onPrimary,
        },
      },
    }
  }
})

export const styles = {

} as const;
