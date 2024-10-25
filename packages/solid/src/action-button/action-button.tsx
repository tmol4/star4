import type { Component, ParentComponent, Ref } from "solid-js";

export namespace ActionButton {
  export type Props = PublicProps;
  export type PublicProps = {
    ref?: Ref<Element>;
    floating?: boolean;
    children: JSX.Element;
  }

  export interface Element extends HTMLButtonElement {}
}

export const ActionButton: Component<ActionButton.Props> = () => {
  return (
    <button>

    </button>
  );
}
