import { Ripple } from "../ripple";
import { styles } from "./radio.css";
import { FocusRing } from "../focus";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState, type ReactNode } from "react";
import type { ComposableForwardRefExoticComponent, ForwardRefExoticComponentProps } from "@star4/react-utils";

export namespace Radio {
  export type Props<T extends Value> =
    & {
      /**
       * The current value of the radio button
       */
      value: T;
      /**
       * The current value of the radio button group
       */
      groupValue: T;
      /**
       * Callback that fires when {@link Props.value|value} changes
       * @eventProperty
       */
      onChange?: (value: T) => void;
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
 * Radio button
 *
 * @remarks
 * Radio buttons let people select one option from a set of options
 *
 * @see {@link https://m3.material.io/components/radio-button/overview|Radio button - Material Design 3}
 *
 * @typeParam T - the value type of the radio button group
 *
 * @example
 * Use strings as values
 * ```
 * const Example = () => {
 *   const [value, setValue] = useState("apple");
 *   return (
 *     <div>
 *       <Radio groupValue={value} value="apple" onChange={setValue} />
 *       <Radio groupValue={value} value="banana" onChange={setValue} />
 *       <Radio groupValue={value} value="cucumber" onChange={setValue} />
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
 * const Example = () => {
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
 */
export const Radio = forwardRef<Radio.Element, Radio.Props<Radio.Value>>(
  (
    {
      groupValue,
      value,
      onChange,
      disabled,
    },
    forwardedRef,
  ) => {
    const ref = useRef<HTMLDivElement>(null);
    useImperativeHandle(
      forwardedRef,
      ()  => ref.current!,
      [],
    );

    const checked = useMemo(() => value === groupValue, [value, groupValue]);

    const render = useRef(0);
    const [animate, setAnimate] = useState(false);

    useEffect(
      () => {
        if(render.current < 2) render.current++;
        else if(!animate) setAnimate(true);
      },
      [checked],
    );


    return (
      <div
        ref={ref}
        className={styles.container({ checked, disabled })}
        role="radio"
        onClick={() => onChange?.(value)}
        tabIndex={0}>
          <Ripple for={ref} />
          <FocusRing for={ref} />
          <div
            className={styles.icon({
              checked,
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
