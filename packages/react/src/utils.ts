import { useEffect, useState, type FocusEventHandler, type Ref, type RefObject } from "react";

export const useFocusVisible = <T extends HTMLElement>(
  target: RefObject<T>
): boolean => {
  const [visible, setVisible] = useState(false);

  const onFocusIn = (event: FocusEvent) => {
    setVisible(
      (event.currentTarget as HTMLElement).matches(":focus-visible"),
    );
  }
  const onFocusOut = () => setVisible(false);
  const onPointerDown = () => setVisible(false);

  useEffect(
    () => {
      if(!target.current) return;
      const element = target.current;

      element.addEventListener("focusin", onFocusIn);
      element.addEventListener("focusout", onFocusOut);
      element.addEventListener("pointerdown", onPointerDown);

      return () => {
        element.removeEventListener("focusin", onFocusIn);
        element.removeEventListener("focusout", onFocusOut);
        element.removeEventListener("pointerdown", onPointerDown);
      };
    },
    [target],
  );

  return visible;
}
