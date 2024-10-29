import { createEffect, createMemo, createReaction, createSignal, on, onMount, splitProps, type Component, type Ref } from "solid-js";
import { Ripple } from "../ripple";
import { styles } from "./radio.css";
import { FocusRing } from "../focus";

export namespace Radio {
  export type Props =
  & {}
  & {
    ref?: Ref<Element>;
    value: Value;
    groupValue: Value;
    onChange?: (value: Value) => void;
  }

  export type Value = string | number | symbol;

  export interface Element extends HTMLElement {}
}

export const Radio: Component<Radio.Props> = (props) => {
  const [local, others] = splitProps(props, ["ref", "onChange", "value", "groupValue"]);

  let ref!: HTMLElement;

  const checked = createMemo(() => local.value === local.groupValue);

  const [animate, setAnimate] = createSignal(false);

  const track = createReaction(() => setAnimate(true));
  track(() => local.groupValue);


  return (
    <div
      ref={ref as HTMLDivElement}
      class={styles.container({ checked: checked() })}
      role="radio"
      onClick={() => local.onChange?.(local.value)}
      tabIndex={0}>
        <Ripple for={ref} />
        <FocusRing for={ref} />
        <div
          class={styles.icon({
            checked: checked(),
            animate: animate(),
            disabled: false,
          })} />
    </div>
  );
}
