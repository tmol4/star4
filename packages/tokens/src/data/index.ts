import { COLOR } from "./color";
import { MOTION } from "./motion";
import { SHAPE } from "./shape";
import { STATE } from "./state";
import { TYPEFACE } from "./typeface";
import { TYPESCALE } from "./typescale";

export const TOKENS = {
  motion: MOTION,
  color: COLOR,
  state: STATE,
  typescale: TYPESCALE,
  typeface: TYPEFACE,
  shape: SHAPE,
} as const;
