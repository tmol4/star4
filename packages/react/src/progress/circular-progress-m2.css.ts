import { THEME } from "@star4/vanilla-extract";
import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const INTERMEDIATE_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

const ARC_DURATION_MS = 1333;
const CYCLE_DURATION_MS = ARC_DURATION_MS * 4;
const ARC_START_ROTATION_DEG = 216;
const ARC_SIZE_DEG = 270;
const LINEAR_ROTATE_DURATION_MS = ARC_DURATION_MS * 360 / (ARC_START_ROTATION_DEG + (360 - ARC_SIZE_DEG));

const linearRotate = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});
const rotateArc = keyframes({
  "12.5%": {
    transform: "rotate(135deg)",
  },
  "25%": {
    transform: "rotate(270deg)",
  },
  "37.5%": {
    transform: "rotate(405deg)",
  },
  "50%": {
    transform: "rotate(540deg)",
  },
  "62.5%": {
    transform: "rotate(675deg)",
  },
  "75%": {
    transform: "rotate(810deg)",
  },
  "87.5%": {
    transform: "rotate(945deg)",
  },
  "100%": {
    transform: "rotate(1080deg)",
  },
});

const expandArcLeft = keyframes({
  "0%": {
    transform: "rotate(85deg)",
  },
  "50%": {
    transform: "rotate(-45deg)",
  },
  "100%": {
    transform: "rotate(85deg)",
  },
});

const expandArcRight = keyframes({
  "0%": {
    transform: "rotate(-85deg)",
  },
  "50%": {
    transform: "rotate(45deg)",
  },
  "100%": {
    transform: "rotate(-85deg)",
  },
});

const container = style({
  position: "relative",
  width: 48,
  height: 48,

  userSelect: "none",
  pointerEvents: "none",
  cursor: "wait",

  animationName: linearRotate,
  animationDuration: `${LINEAR_ROTATE_DURATION_MS}ms`,
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
});

const spinner = style({
  position: "absolute",
  inset: 0,

  animationName: rotateArc,
  animationDuration: `${CYCLE_DURATION_MS}ms`,
  animationTimingFunction: INTERMEDIATE_EASING,
  animationFillMode: "both",
  animationIterationCount: "infinite",
})

const half = recipe({
  base: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
  },
  variants: {
    side: {
      left: {
        right: "50%",
      },
      right: {
        left: "50%",
      },
    }
  }
});
const arc = recipe({
  base: {
    position: "absolute",
    inset: 0,
    transformOrigin: "center",

    animationIterationCount: "infinite",
    animationFillMode: "both",
    animationDuration: `${ARC_DURATION_MS}ms, ${CYCLE_DURATION_MS}ms`,
    animationTimingFunction: INTERMEDIATE_EASING,

    "::before": {
      content: "",
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      border: "4px solid",
      borderColor: `${THEME.color.primary} ${THEME.color.primary} transparent transparent`,
      transformOrigin: "center",
      transform: "rotate(-45deg)",
    },
    "::after": {
      content: "",
      position: "absolute",
      width: 4,
      height: 2,
      top: "50%",
      backgroundColor: THEME.color.primary,

      borderRadius: "0 0 4px 4px",
    },
  },
  variants: {
    variant: {
      activeIndicator: {
        "::before": {
          borderColor: `${THEME.color.primary} ${THEME.color.primary} transparent transparent`,
        },
        "::after": {
          backgroundColor: THEME.color.primary,
        },
      },
      track: {
        "::before": {
          borderColor: `${THEME.color.secondaryContainer} ${THEME.color.secondaryContainer} transparent transparent`,
        },
        "::after": {
          backgroundColor: THEME.color.secondaryContainer,
        },
      },
    },
    side: {
      left: {
        right: "-100%",
        animationName: expandArcLeft,
        "::after": {
          left: 0,
        },
      },
      right: {
        left: "-100%",
        animationName: expandArcRight,
        "::after": {
          right: 0,
        },
      },
    },
  }
})

export const styles = {
  container,
  spinner,
  half,
  arc,
} as const;
