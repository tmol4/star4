import { Ripple } from "../ripple";
import { styles } from "./radio.css";
import { FocusRing } from "../focus";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";

export namespace Radio {
  export type Props =
    & {
      /**
       * The current value of the radio button
       */
      value: Value;
      /**
       * The current value of the radio button group
       */
      groupValue: Value;
      /**
       * Callback that fires when {@link Props.value|value} changes
       * @eventProperty
       */
      onChange?: (value: Value) => void;
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
 * @example
 * Use strings as values
 * ```
 * const [value, setValue] = useState("apple");
 * return (
 *   <div>
 *     <Radio groupValue={value} value="apple" onChange={setValue} />
 *     <Radio groupValue={value} value="banana" onChange={setValue} />
 *     <Radio groupValue={value} value="cucumber" onChange={setValue} />
 *   </div>
 * );
 * ```
 */
export const Radio = forwardRef<Radio.Element, Radio.Props>(
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
);
