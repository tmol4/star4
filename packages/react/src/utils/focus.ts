import { useEffect, useState, type FocusEventHandler, type Ref, type RefObject } from "react";

export const useFocusVisible = <T extends HTMLElement>(
  target: RefObject<T>
): boolean => {
  const [visible, setVisible] = useState(false);

  // createEffect(() => {
  //   createEventListenerMap(
  //     target,
  //     {
  //       focusin: (event) => {
  //         setVisible((event.currentTarget as Element).matches(":focus-visible"));
  //       },
  //       focusout: () => {
  //         setVisible(false);
  //       },
  //       pointerdown: () => {
  //         setVisible(false)
  //       },
  //     }
  //   );
  // });

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
