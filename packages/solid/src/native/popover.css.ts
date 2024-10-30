import { style } from "@vanilla-extract/css";

const native = style({
  // position: fixed;
  // inset: 0;
  // width: fit-content;
  // height: fit-content;
  // margin: auto;
  // border: solid;
  // padding: 0.25em;
  // overflow: auto;
  // color: CanvasText;
  // background-color: Canvas;


  pointerEvents: "none",
  "::backdrop": {
    pointerEvents: "none",
  },

  position: "fixed",
  inset: 0,
  margin: 0,
  padding: 0,

  overflow: "hidden",

  maxWidth: "100%",
  maxHeight: "100%",
  width: "100dvw",
  height: "100dvh",

  border: "none",
  outline: "none",
  color: "unset",
  background: "transparent",
});
const portal = style({

});

export const styles = {
  native,
  portal,
} as const;
