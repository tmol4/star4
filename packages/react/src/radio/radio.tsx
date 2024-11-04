import { Ripple } from "../ripple";
import { styles } from "./radio.css";
import { FocusRing } from "../focus";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import type { ComposableForwardRefExoticComponent, ForwardRefExoticComponentProps } from "@star4/react-utils";
import clsx from "clsx/lite";

export namespace Radio {
  export type AutomaticControlledProps<T extends Value> = {
    checked?: never;
    /**
     * The current value of the radio button group
     */
    groupValue: T;
    /**
     * The current value of the radio button
     */
    value: T;
    /**
     * Callback that fires when the radio button is clicked.
     * @param value - {@link AutomaticControlledProps.value|value} of the radio button.
     * @eventProperty
     */
    onValueChange?: (value: T) => void;
  };
  export type ManualControlledProps = {
    /**
     * Whether this radio is checked.
     * @defaultValue `false`
     */
    checked?: boolean;
    groupValue?: never;
    value?: never;
    /**
     * Callback that fires when the radio button is clicked.
     * @param value - always `true`
     * @eventProperty
     */
    onValueChange?: (value: boolean) => void;
  };
  export type Props<T extends Value> =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "role" | "aria-checked" | "children"
    >
    & (AutomaticControlledProps<T> | ManualControlledProps)
    & {
      /**
       * Prevents the user from interacting with the radio button: it cannot be pressed or focused.
       *
       * @defaultValue `false`
       */
      disabled?: boolean;
    };

  /**
   * Possible values for the radio button
   */
  export type Value = string | number | symbol;

  /**
   * Imperative handle to the underlying DOM element
   */
  export interface Element extends HTMLElement {}
}

/**
 * Radio buttons let people select one option from a set of options
 *
 * @remarks
 * This component provides two operation modes: automatic and controlled.
 *
 * @see {@link https://m3.material.io/components/radio-button/overview|Radio button - Material Design 3}
 *
 * @typeParam T - the value type of the radio button group
 *
 * @example
 * Use primitives values
 * ```
 * const StringsExample = () => {
 *   const [value, setValue] = useState("apple");
 *   return (
 *     <div>
 *       <Radio groupValue={value} value="apple" onChange={setValue} />
 *       <Radio groupValue={value} value="banana" onChange={setValue} />
 *       <Radio groupValue={value} value="cucumber" onChange={setValue} />
 *     </div>
 *   );
 * }
 * const NumbersExample = () => {
 *   const [value, setValue] = useState(0);
 *   return (
 *     <div>
 *       <Radio groupValue={value} value={0} onChange={setValue} />
 *       <Radio groupValue={value} value={1} onChange={setValue} />
 *       <Radio groupValue={value} value={2} onChange={setValue} />
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * Explicitly provide value type
 * ```tsx
 * const enum Fruit {
 *   APPLE,
 *   APRICOT,
 *   BANANA,
 *   CUCUMBER,
 *   ORANGE,
 * }
 *
 * const CustomValueTypeExample = () => {
 *   const [fruit, setFruit] = useState<Fruit>(Fruit.APPLE);
 *   return (
 *     <div>
 *       <Radio<Fruit> groupValue={fruit} value={Fruit.APPLE} onChange={setFruit} />
 *       <Radio<Fruit> groupValue={fruit} value={Fruit.APRICOT} onChange={setFruit} />
 *       <Radio<Fruit> groupValue={fruit} value={Fruit.BANANA} onChange={setFruit} />
 *       <Radio<Fruit> groupValue={fruit} value={Fruit.CUCUMBER} onChange={setFruit} />
 *       <Radio<Fruit> groupValue={fruit} value={Fruit.ORANGE} onChange={setFruit} />
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * Controlled radio button
 * ```tsx
 * const ControlledExample = () => {
 *   const [checked, setChecked] = useState(false);
 *   return (
 *     <Radio checked={checked} onChange={setChecked} />
 *   );
 * }
 * ```
 */
export const Radio = forwardRef<Radio.Element, Radio.Props<Radio.Value>>(
  (
    {
      className,
      checked,
      groupValue,
      value,
      onValueChange,
      disabled,
      ...rest
    },
    forwardedRef,
  ) => {
    const ref = useRef<HTMLDivElement>(null);
    useImperativeHandle(
      forwardedRef,
      ()  => ref.current!,
      [],
    );

    const manual = useMemo(() => checked !== undefined, [checked]);
    const isChecked = useMemo(
      () => manual ? checked! : value === groupValue,
      [manual, checked, value, groupValue],
    );

    const render = useRef(0);
    const [animate, setAnimate] = useState(false);

    useEffect(
      () => {
        if(render.current < 2) render.current++;
        else if(!animate) setAnimate(true);
      },
      [isChecked],
    );


    return (
      <div
        ref={ref}
        className={clsx(
          styles.container({ checked: isChecked, disabled }),
          className,
        )}
        onClick={
          () => (
            onValueChange as (value: boolean | Radio.Value) => void
          )?.(manual || value!)
        }
        role="radio"
        aria-checked={isChecked}
        tabIndex={0}
        {...rest}>
          <Ripple for={ref} />
          <FocusRing for={ref} />
          <div
            className={styles.icon({
              checked: isChecked,
              animate,
              disabled,
            })} />
      </div>
    );
  },
) as ComposableForwardRefExoticComponent<
  ExoticProps<Radio.Value>,
  <T extends Radio.Value>(props: ExoticProps<T>) => ReactNode
>;

type ExoticProps<T extends Radio.Value> = ForwardRefExoticComponentProps<Radio.Element, Radio.Props<T>>;
