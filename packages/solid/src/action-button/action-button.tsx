import { splitProps, type Component, type JSX, type ParentComponent, type Ref } from "solid-js";
import {} from "clsx/lite";
// import { container } from "./action-button.css";

export namespace ActionButton {
  export type Props = PublicProps;
  export type PublicProps =
    & JSX.ButtonHTMLAttributes<HTMLButtonElement>
    & {
      ref?: Ref<Element>;
      floating?: boolean;
      icon?: JSX.Element;
    };

  export interface Element extends HTMLButtonElement {}
}

export const ActionButton: Component<ActionButton.Props> = (props) => {
  const [local, others] = splitProps(
    props,
    ["ref", "class", "floating", "icon"]
  );
  return (
    <button class={local.class}>
      {local.icon}
    </button>
  );
}
