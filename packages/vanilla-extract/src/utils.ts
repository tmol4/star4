import { argbFromHex, argbFromRgb } from "@material/material-color-utilities";
import { Hct } from "@star4/theme/material";

declare const TYPE_VALUE: unique symbol;

export type Tokens = {
  [key: string]: unknown | Tokens;
}

export type Remap<T extends Tokens> = {
  [P in keyof T]: T[P] extends Tokens ? Remap<T[P]> : string;
}

export type ValueToken = {
  [TYPE_VALUE]: true;
};

export type ResolveTokens<T, U> = {
  [K in keyof T]: T[K] extends ValueToken
    ? U
    : ResolveTokens<T[K], U>;
}

export type ResolveContract<T> = ResolveTokens<DeepRequired<T>, string>;

export type CSSVarFunction = `var(--${string})` | `var(--${string}, ${string | number})`;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
}
export type DeepRequired<T> = {
  [P in keyof T]-?: DeepRequired<T[P]>;
}

type OptionalKeys<T> = {
  [K in keyof T]-?: undefined extends { [K2 in keyof T]: K2 }[K] ? K : never
}[keyof T]
type RequiredKeys<T> = Exclude<keyof T, OptionalKeys<T>>

export type DeepInvert<T> =
  & {
    [K in OptionalKeys<T>]-?: NonNullable<T[K]>
  }
  & {
    [K in RequiredKeys<T>]+?: T[K]
  };

export type MaybeHct = string | Hct;

export const resolveHct = (value: MaybeHct): Hct => {
  if(value instanceof Hct) return value;

  if(typeof value === "string") {
    if(value.startsWith("#")) {
      const argb = argbFromHex(value);
      return Hct.fromInt(argb);
    }

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
