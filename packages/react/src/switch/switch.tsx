import { createIdentifiableElement } from "@star4/react-utils";
import { forwardRef, memo } from "react"

export namespace Switch {
  export type Props = {}
  export interface Element extends HTMLElement {}
}

const SwitchComponent = forwardRef<Switch.Element, Switch.Props>(
  function Switch(
    {},
    forwardedRef,
  ) {


    return (
      <div>
        <input
          type="checkbox" />
      </div>
    )
  },
);

export const Switch = Object.assign(
  memo(SwitchComponent),
  createIdentifiableElement("IS_SWITCH"),
);
