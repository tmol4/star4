import { THEME } from "@star4/vanilla-extract";
import { keyframes, style } from "@vanilla-extract/css";

const container = style({
  position: "absolute",
  inset: 0,

  display: "grid",
});

const FLOWER_PATH = "M77.1461 39.9994C83.6068 52.0411 78.7255 62.9426 66.2666 66.2653C62.9426 78.7255 52.0411 83.6055 39.9994 77.1461C27.9577 83.6068 17.0561 78.7255 13.7334 66.2666C1.27453 62.9426 -3.60675 52.0411 2.85391 39.9994C-3.60675 27.9577 1.27453 17.0561 13.7334 13.7334C17.0561 1.27453 27.9577 -3.60675 39.9994 2.85391C52.0411 -3.60675 62.9426 1.27453 66.2653 13.7334C78.7255 17.0561 83.6055 27.9577 77.1461 39.9994Z";

const rotate = keyframes({
  to: {
    transform: "rotate(360deg)",
  }
});

const playButton = style({
  position: "relative",
  outline: "none",
  border: "none",
  background: "transparent",

  width: 80,
  height: 80,
  fontSize: 36,

  color: THEME.color.inverseOnSurface,

  "::before": {
    content: "",
    position: "absolute",
    inset: 0,
    backgroundColor: THEME.color.inverseSurface,
    clipPath: `path("${FLOWER_PATH}")`,

    animation: `${rotate} 36s linear infinite`,
  },
});




export const styles = {
  container,
  playButton,
} as const;
