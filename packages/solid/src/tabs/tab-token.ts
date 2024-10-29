import { createToken } from "@solid-primitives/jsx-tokenizer";
import type { JSX } from "solid-js";

export namespace TabToken {
  export type Props = {
    value: string | number | symbol;
    icon?: JSX.Element;
    label: JSX.Element;
  }
}
export const TabToken = createToken<TabToken.Props>();
