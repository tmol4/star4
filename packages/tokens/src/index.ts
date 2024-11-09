import { TOKENS } from "./data";
import { splitByCase } from "./utils";

export type CreateTokensOptions = {
  prefixes?: string[];
  join?: (...parts: string[]) => string,
}


/**
 * @example
 * ```ts
 * const TOKENS = createTokens(
 *   {},
 *   {},
 * );
 * ```
 */
export const createTokens = (
  {
    prefixes = [],
    join = (...parts) => parts.join("-").toLowerCase()
  }: CreateTokensOptions,
  overrides: Partial<Record<string, string>> = {},
) => {
  return process(
    TOKENS,
    join,
    ...prefixes,
  );
}

type TransformedData = {
  [key: string]: string | TransformedData;
}

type Transform<T extends DataArray | DataObject> =
  T extends DataArray
    ? _TransformArray<T>
    : T extends DataObject
      ? _TransformObject<T>
      : never;
type _TransformObject<T extends DataObject> = {
  [P in keyof T]: Transform<T[P]>;
}
type _TransformArray<T extends DataArray> =
  & {
    [P in T[number] as P extends string ? P : never]: string
  }
  & (
    Extract<T[number], DataObject> extends never
      ? {}
      : Transform<Extract<T[number], DataObject>>
  );

type DataObject = {
  [key: string]: DataArray | DataObject;
}
type DataArray = readonly (string | DataObject)[];

const process = <const T extends DataObject | DataArray>(
  source: T,
  join: (...parts: string[]) => string,
  ...prefixes: string[]
): Transform<T> => {
  const result: TransformedData = {};
  if(Array.isArray(source)) {
    let length = source.length;
    let i = 0;
    for(i; i < length; i++) {
      const value = source[i];
      if(typeof value === "string") {
        const parts = splitByCase(value);
        result[value] = join(...prefixes, ...parts);
      } else {
        const object = process(value as DataObject | DataArray, join, ...prefixes);
        for(const key in object) {
          result[key] = object[key];
        }
      }
    }
  } else {
    for(const key in source) {
      const parts = splitByCase(key);
      result[key] = process(source[key] as DataObject | DataArray, join, ...prefixes, ...parts);
    }
  }
  return result as Transform<T>;
}


