import { forwardRef, useEffect, useRef, type ChangeEventHandler, type FormEventHandler, type HTMLAttributes } from "react";
import { styles } from "./checkbox.css";
import { Ripple } from "../ripple";
import { FocusRing } from "../focus";
import { usePreviousState } from "@star4/react-utils";

export namespace Checkbox {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "onChange" | "onInput" | "children"
    >
    & {
      checked?: boolean;
      required?: boolean;
      // onChange?: ChangeEventHandler<HTMLInputElement>;
      // onInput?: FormEventHandler<HTMLInputElement>;
      onChange?: (value: boolean) => void;
    }

  export interface Element extends HTMLElement {}
}

export const Checkbox = forwardRef<Checkbox.Element, Checkbox.Props>(
  (
    {
      onChange,
      checked = false,
    },
    forwardedRef,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const input = inputRef.current;
      if(!input) return;
      input.checked = checked;
    }, [checked]);

    const selected = checked;

    const prevChecked = usePreviousState(checked) ?? checked;
    const prevSelected = usePreviousState(selected) ?? selected;

    useEffect(() => {
      console.log(prevChecked, checked);
    }, [checked]);

    return (
      <div className={styles.wrapper()}>
        <div
          className={styles.container()}>
            <input
              ref={inputRef}
              className={styles.input()}
              type="checkbox"
              checked={checked}
              onChange={(event) => onChange?.(event.currentTarget.checked)}
              onInput={(event) => onChange?.(event.currentTarget.checked)} />
            <div className={styles.outline()} />
            <div className={styles.background({ selected })} />
            <FocusRing className={styles.focusRing()} for={inputRef} />
            <Ripple className={styles.stateLayer({ selected })} for={inputRef} />
            <svg className={styles.icon({ selected })} viewBox="0 0 18 18" aria-hidden>
              <rect className={styles.mark({ type: "short", selected, prevSelected, checked, prevChecked })} />
              <rect className={styles.mark({ type: "long", selected, prevSelected, checked, prevChecked })} />
            </svg>
        </div>
      </div>
    );
  },
);
