import { THEME } from "@star4/vanilla-extract";
import { createTheme, createThemeContract, keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

// const INTERMEDIATE_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";
// const INTERMEDIATE_EASING = THEME.motion.easing.legacy;
// const INTERMEDIATE_EASING = THEME.motion.easing.emphasized;
const INTERMEDIATE_EASING = THEME.motion.easing.standard;

const ARC_DURATION_MS = 2000;
const CYCLE_DURATION_MS = ARC_DURATION_MS * 4;
const ARC_START_ROTATION_DEG = 216;
const ARC_SIZE_DEG = 270;
const LINEAR_ROTATE_DURATION_MS = ARC_DURATION_MS * 360 / (ARC_START_ROTATION_DEG + (360 - ARC_SIZE_DEG));





// const [theme, THEME.component.circularProgress] = createTheme({
//   containerSize: "18px",
//   activeIndicatorThickness: "2px",
//   // activeIndicatorColor: THEME.color.primary,
//   activeIndicatorColor: "currentcolor",
//   activeIndicatorShape: "0px",

//   trackThickness: "4px",
//   trackColor: THEME.color.secondaryContainer,
//   trackShape: "2px",
// });

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
    transform: "rotate(-50deg)",
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
    transform: "rotate(50deg)",
  },
  "100%": {
    transform: "rotate(-85deg)",
  },
});

const container = style({
  position: "relative",
  width: THEME.component.circularProgress.containerSize,
  height: THEME.component.circularProgress.containerSize,

  userSelect: "none",
  pointerEvents: "none",
  cursor: "wait",

  animationName: linearRotate,
  animationDuration: `${LINEAR_ROTATE_DURATION_MS / 2}ms`,
  // animationDuration: `${CYCLE_DURATION_MS / 8}ms`,
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
      borderStyle: "solid",
      borderColor: `currentcolor currentcolor transparent transparent`,
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
    },
  },
  variants: {
    variant: {
      activeIndicator: {
        color: THEME.component.circularProgress.activeIndicatorColor,
        "::before": {
          borderWidth: THEME.component.circularProgress.activeIndicatorThickness,
        },
        "::after": {
          width: THEME.component.circularProgress.activeIndicatorThickness,
          height: THEME.component.circularProgress.activeIndicatorShape,
          backgroundColor: THEME.color.primary,
          borderRadius: `0 0 ${THEME.component.circularProgress.activeIndicatorShape} ${THEME.component.circularProgress.activeIndicatorShape}`,
        },
      },
      track: {
        color: THEME.component.circularProgress.trackColor,
        "::before": {
          borderWidth: THEME.component.circularProgress.trackThickness,
        },
        "::after": {
          width: THEME.component.circularProgress.trackThickness,
          height: THEME.component.circularProgress.trackShape,
          backgroundColor: THEME.color.secondaryContainer,
          borderRadius: `0 0 ${THEME.component.circularProgress.trackShape} ${THEME.component.circularProgress.trackShape}`,
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








const degToRad = (deg: number) => deg * Math.PI / 180;
const radToDeg = (rad: number) => rad * 180 / Math.PI;

const THICKNESS_PX = 4;
const SIZE_PX = 48;
const DIAMETER_PX = SIZE_PX - THICKNESS_PX;
const RADIUS_PX = DIAMETER_PX / 2;

const SPACING_PX = 4;
const HALF_SPACING_PX = SPACING_PX / 2;
const SPACING_DEG = radToDeg(SPACING_PX / RADIUS_PX);
const HALF_SPACING_DEG = radToDeg(HALF_SPACING_PX / RADIUS_PX);


type Arc = {
  minSizeDeg: number;
  maxSizeDeg: number;

}

const ACTIVE_INDICATOR: Arc = {
  minSizeDeg: 10,
  maxSizeDeg: 270,
};


