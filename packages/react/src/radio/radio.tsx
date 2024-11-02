import { Ripple } from "../ripple";
import { styles } from "./radio.css";
import { FocusRing } from "../focus";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";

export namespace Radio {
  export type Props =
    & {
      value: Value;
      groupValue: Value;
      onChange?: (value: Value) => void;
      disabled?: boolean;
    };

  export type Value = string | number | symbol;

  export interface Element extends HTMLElement {}
}

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
