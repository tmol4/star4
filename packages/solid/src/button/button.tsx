import { Show, splitProps, type Component, type JSX, type Ref } from "solid-js";
import { FocusRing } from "../focus";
import clsx from "clsx/lite";
import { styles } from "./button.css";
import { Ripple } from "../ripple";
import { MaterialSymbol } from "../icon-old";

export namespace Button {
  export type Props = PublicProps & ProtectedProps;
  export type ProtectedProps = {
    background?: JSX.Element;
    overlay?: JSX.Element;
  }
  export type PublicProps =
    & Omit<
      JSX.ButtonHTMLAttributes<HTMLButtonElement>,
      "ref" | "children"
    >
    & {
      ref?: Ref<Element>;
      icon?: JSX.Element;
      label: JSX.Element;
    };

  export interface Element extends HTMLElement {}



  export namespace Background {
    export type Props = JSX.HTMLAttributes<HTMLElement>;
  }
}

export const Button: Component<Button.Props> = (props) => {
  const [local, others] = splitProps(
    props,
    ["ref", "class", "background", "overlay", "icon", "label"],
  );

  let ref!: HTMLElement;

  const icon = (
    <Show when={local.icon}>{
      (icon) => (
        <MaterialSymbol.Slot class={styles.icon}>
          {icon()}
        </MaterialSymbol.Slot>
      )
    }</Show>
  );

  return (
    <div
      ref={ref as HTMLDivElement}
      class={clsx(
        styles.container({
          hasIcon: !!local.icon,
        }),
        local.class,
      )}>
      {local.overlay}
      <div class={
        styles.background()
      } />
      <Ripple for={ref} />
      <FocusRing for={ref} />
      <button class={styles.control()}>
        <div class={styles.touchTarget()} />
        {icon}
        <span>
          {local.label}
        </span>
      </button>
    </div>
  );
}
