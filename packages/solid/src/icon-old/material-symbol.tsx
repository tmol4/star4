import { splitProps, type Component, type JSX } from "solid-js";
import { icon } from "./material-symbol.css";
import { createSlot } from "../slot";
import clsx from "clsx/lite";

export namespace MaterialSymbol {
  export type Props = ProtectedProps & PublicProps;

  export type ProtectedProps = {}
  export type PublicProps =
    & Omit<
      JSX.HTMLAttributes<HTMLElement>,
      "children"
    >
    & {
      name: string;
    };
}

const MaterialSymbolComponent: Component<MaterialSymbol.Props> = (props) => {
  const [local, others] = splitProps(
    props,
    ["name", "class"],
  );

  const slot = useSlot();

  return (
    <span
      {...slot?.()}
      class={clsx(
        icon,
        slot?.().class,
        local.class,
      )}
      {...others}>
        {local.name}
    </span>
  );
}

const [Slot, useSlot] = createSlot<JSX.HTMLAttributes<HTMLElement>>();

export const MaterialSymbol = Object.assign(
  MaterialSymbolComponent,
  {
    Slot,
  },
);
