import { splitProps, type Component, type JSX, type Ref } from "solid-js";
import { Icon } from "./icon";
import { styles } from "./material-symbol.css";
import clsx from "clsx/lite";

export namespace MaterialSymbol {
  export type Props =
    & Omit<
      JSX.HTMLAttributes<HTMLElement>,
      "ref" | "children"
    >
    & {
      ref?: Ref<Element>;
      name: string;
    };

  export interface Element extends HTMLElement {}
}

export const MaterialSymbol: Component<MaterialSymbol.Props> = (props) => {
  const [local, others] = splitProps(
    props,
    ["class", "name"],
  );
  return (
    <span
      class={clsx(styles.icon, local.class)}
      children={local.name}
      {...others} />
  );
}
