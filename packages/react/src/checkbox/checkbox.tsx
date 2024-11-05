import { forwardRef, useEffect, useRef, type ChangeEventHandler, type FormEventHandler, type HTMLAttributes } from "react";

export namespace Checkbox {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & {
      checked?: boolean;
      required?: boolean;
      onChange?: ChangeEventHandler<HTMLInputElement>;
      onInput?: FormEventHandler<HTMLInputElement>;
    }

  export interface Element extends HTMLElement {}
}

export const Checkbox = forwardRef<Checkbox.Element, Checkbox.Props>(
  (
    {
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

    return (
      <div>
        <input
          ref={inputRef}
          type="checkbox"
          checked={checked} />
      </div>
    );
  },
);
