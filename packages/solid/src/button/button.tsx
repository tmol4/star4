import { createEffect, createSignal, splitProps, type Component, type JSX, type Signal } from "solid-js";
import { background, button, host } from "./button.css";
import type { Ref } from "@solid-primitives/refs";

export namespace Button {
  export type Props =
    & ProtectedProps
    & PublicProps;
  export type ProtectedProps = {
    overlay?: JSX.Element;
  }

  export type PublicProps =
    & Omit<
      JSX.ButtonHTMLAttributes<HTMLElement> | JSX.AnchorHTMLAttributes<HTMLElement>,
      "children"
    >
    & {
      ref?: Ref<Element>;
      icon?: JSX.Element;
      label?: JSX.Element;
    };

  export interface Element extends HTMLElement {
    refs: {
      button: HTMLButtonElement;
    };
  }
}

// export type StyledComponent<T> = JSX.Element | ComponentBuilder<T>;
// export type ComponentBuilder<T> = (value: T) => JSX.Element;

export const Button: Component<Button.Props> = (props) => {
  const [, local] = splitProps(props, []);
  let ref!: HTMLElement;
  const [buttonRef, setButtonRef] = createSignal() as Signal<HTMLElement>;

  createEffect(() => {
    const callback = local.ref as (element: HTMLElement) => void | undefined;
    callback?.(ref);
  });

  const content = (
    <>
      <span class="touch"></span>
      {local.icon}
      <span class="label">
        {local.label}
      </span>
    </>
  );

  return (
    <div ref={ref as HTMLDivElement} class={host}>
      {local.overlay}
      <div class={
        background
      } />
      <button
        ref={setButtonRef}
        class={button}
        children={content} />
    </div>
  );
}
