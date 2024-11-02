import { forwardRef, type HTMLAttributes } from "react";
import clsx from "clsx/lite";
import { styles } from "./material-symbol.css";

export namespace MaterialSymbol {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & {
      name: string;
    };
  export interface Element extends HTMLElement {}
}

export const MaterialSymbol = forwardRef<MaterialSymbol.Element, MaterialSymbol.Props>(
  ({ name, className, ...rest }, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={clsx(styles.icon, className)}
        {...rest}
        children={name} />
    )
  },
);
