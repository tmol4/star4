import { type JSX, type Ref, type Component, splitProps } from "solid-js";
import clsx from "clsx/lite";
import { styles } from "./tab.css";
import { mergeRefs } from "@solid-primitives/refs";
import { Ripple } from "../ripple";
import { FocusRing } from "../focus";

export namespace Tab {
  export type Props =
  & Omit<
    JSX.ButtonHTMLAttributes<HTMLButtonElement>,
    "ref" | "role" | "aria-selected" | "children"
  >
  & {
    ref?: Ref<Element>;
    selected?: boolean;
    icon?: JSX.Element;
    label: JSX.Element;
    indicator?: JSX.Element;
  }

  export interface Element extends HTMLButtonElement {}
}
export const Tab: Component<Tab.Props> = (props) => {
  const [local, others] = splitProps(
    props,
    ["ref", "class", "selected", "icon", "label", "indicator"]
  );

  let ref!: HTMLButtonElement;

  return (
    <button
      ref={mergeRefs(element => ref = element, local.ref)}
      role="tab"
      class={clsx(
        styles.container({
          selected: local.selected ?? false,
        }),
        local.class,
      )}
      aria-selected={local.selected}
      {...others}>

        {local.indicator}
        <Ripple for={ref} class={styles.stateLayer({ selected: local.selected ?? false })} />
        <FocusRing for={ref} />
        <span class={styles.content({
          selected: local.selected ?? false,
        })}>
          {local.icon}
          {local.label}
        </span>
    </button>
  );
}


