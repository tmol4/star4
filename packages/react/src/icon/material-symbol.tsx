import { forwardRef, memo, type FC, type ForwardRefExoticComponent, type ForwardRefRenderFunction, type HTMLAttributes, type PropsWithoutRef, type RefAttributes } from "react";
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





export namespace MaterialSymbol {
  export namespace Animated {
    export type Name =
      | "north_east";

    export type BaseProps = {

    }

    export type Props =
      & BaseProps
      & {
        name: Name;
      };

    export interface Element extends HTMLElement {}
  }
}

const ANIMATED_MATERIAL_SYMBOLS: Record<
  MaterialSymbol.Animated.Name,
  ForwardRefExoticComponent<
    & PropsWithoutRef<MaterialSymbol.Animated.BaseProps>
    & RefAttributes<MaterialSymbol.Animated.Element>
  >
> = {
  north_east: forwardRef(
    function AnimatedMaterialSymbolNorthEast() {
      return (
        <div>

        </div>
      );
    },
  ),
};

const AnimatedMaterialSymbolComponent = forwardRef<MaterialSymbol.Animated.Element, MaterialSymbol.Animated.Props>(
  function AnimatedMaterialSymbol({ name, ...rest }, forwardedRef) {
    const Component = ANIMATED_MATERIAL_SYMBOLS[name];
    return <Component {...rest} />
  },
);

const AnimatedMaterialSymbol = Object.assign(
  AnimatedMaterialSymbolComponent,
  createIdentifiableElement("IS_ANIMATED_MATERIAL_SYMBOL"),
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
  {
    ...createIdentifiableElement("IS_MATERIAL_SYMBOL"),
    Animated: AnimatedMaterialSymbol,
  },
);
