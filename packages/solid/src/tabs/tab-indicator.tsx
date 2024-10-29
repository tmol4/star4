import { splitProps, type Component, type JSX, type Ref } from "solid-js";
import clsx from "clsx/lite";
import { styles } from "./tab-indicator.css";

export namespace TabIndicator {
  export type Props =
    & Omit<
      JSX.HTMLAttributes<HTMLElement>,
      "ref" | "children"
    >
    & {
      ref?: Ref<Element>;
    };

  export interface Element extends HTMLElement {}
}

export const TabIndicator: Component<TabIndicator.Props> = (props) => {
  const [local, others] = splitProps(
    props,
    ["ref", "class"]
  )
  return (
    <div
      ref={local.ref as HTMLDivElement}
      class={clsx(
        styles.container,
        local.class,
      )}
      {...others}>
        <div class={styles.indicator} />
    </div>
  );
}
