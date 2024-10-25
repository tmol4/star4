import { argbFromRgb } from "@material/material-color-utilities";
import { Hct } from "@star4/theme/material";

declare const TYPE_VALUE: unique symbol;

export type ValueToken = {
  [TYPE_VALUE]: true;
};

export type ResolveTokens<T, U> = {
  [K in keyof T]: T[K] extends ValueToken
    ? U
    : ResolveTokens<T[K], U>;
}

export type CSSVarFunction = `var(--${string})` | `var(--${string}, ${string | number})`;




export type MaybeHct = string | Hct;

export const resolveHct = (value: MaybeHct): Hct => {
  if(value instanceof Hct) return value;

  if(typeof value === "string") {
    const color = parseRgbColor(value);
    const argb = argbFromRgb(color[0], color[1], color[2]);
    return Hct.fromInt(argb);
  }

  throw new TypeError("Value must be a string or Hct");
}

type ParsedColor = [red: number, green: number, blue: number];

export const parseRgbColor = (input: string): ParsedColor => {
  if (input.startsWith("#")) {
    const collen= (input.length - 1) / 3;
    const fact = [17, 1, 0.062272][collen - 1];
    return [
      Math.round(parseInt(input.substring(1, collen), 16) * fact),
      Math.round(parseInt(input.substring(1 + collen, collen), 16) * fact),
      Math.round(parseInt(input.substring(1 + 2 * collen, collen), 16) * fact)
    ];
  }

  if(input.startsWith("rgb")) {
    return input
      .split("(")[1]
      .split(")")[0]
      .split(",", 3)
      .map(x => +x & 0xFF) as ParsedColor;
  }

  throw new TypeError("Invalid color format")
}
