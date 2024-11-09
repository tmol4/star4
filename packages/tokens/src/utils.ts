
// MIT License
// Copyright (c) Pooya Parsa <pooya@pi0.io>
// https://github.com/unjs/scule/blob/863bc755f1cb6f3eb7e0afe8b7464d5840ba181b/src/index.ts#L27


const NUMBER_CHAR_RE = /\d/;
const isUppercase = (char = "") => {
  return NUMBER_CHAR_RE.test(char) ? undefined : char !== char.toLowerCase();
}
const STR_SPLITTERS = ["-", "_", "/", "."] as const;

/**
 * scule's splitByCase with simpler types
 */
export const splitByCase = (str: string, separators?: string[]): string[] => {
  const splitters = separators ?? STR_SPLITTERS;
  const parts: string[] = [];

  if (!str || typeof str !== "string") {
    return parts;
  }

  let buff = "";

  let previousUpper: boolean | undefined;
  let previousSplitter: boolean | undefined;

  for (const char of str) {
    // Splitter
    const isSplitter = (splitters as unknown as string).includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = undefined;
      continue;
    }

    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      // Case rising edge
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      // Case falling edge
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }

    // Normal char
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }

  parts.push(buff);

  return parts;
}
