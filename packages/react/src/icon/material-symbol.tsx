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

/**
 * Icon, which uses the {@link https://fonts.google.com/icons|Material Symbols} font.
 *
 * @remarks
 *
 *
 * - Use the Material Symbols variable font to enable dynamic styling in product.
 * - You can change the weight, fill, optical size, and grade of variable font icons.
 *
 * @see {@link https://m3.material.io/styles/icons/overview|Icons - Material Design 3}
 */
export const MaterialSymbol = forwardRef<MaterialSymbol.Element, MaterialSymbol.Props>(
  ({ name, className, "aria-hidden": ariaHidden, ...rest }, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={clsx(styles.icon, className)}
        aria-hidden={ariaHidden !== false}
        {...rest}
        children={name} />
    )
  },
);
