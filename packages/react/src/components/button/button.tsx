import type { ComponentProps, ComponentType, ElementType, FC, ReactNode, JSX, JSXElementConstructor } from "react";

import clsx from "clsx/lite";
import { container } from "./button.css";

export namespace Button {
  export type Props =
    & Omit<
      JSX.IntrinsicElements["button"],
      "children"
    >
    & {
      icon?: ReactNode;
      label: ReactNode;
    };
}

export function Button(
  {
    icon,
    label,
    className,
    ...others
  }: Button.Props,
) {
  return (
    <button
      {...others}
      className={
        clsx(container, className)
      }>
        {icon}
        <span>{label}</span>
    </button>
  )
}
