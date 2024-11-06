import { forwardRef, memo, type HTMLAttributes } from "react";
import clsx from "clsx/lite";
import { styles } from "./material-symbol.css";
import { createIdentifiableElement } from "@star4/react-utils";

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

const MaterialSymbolComponent = forwardRef<MaterialSymbol.Element, MaterialSymbol.Props>(
  function MaterialSymbol({ name, className, "aria-hidden": ariaHidden, ...rest }, forwardedRef) {
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
export const MaterialSymbol = Object.assign(
  memo(MaterialSymbolComponent),
  createIdentifiableElement("IS_MATERIAL_SYMBOL"),
);
