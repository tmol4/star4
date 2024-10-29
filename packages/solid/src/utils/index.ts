import { createEventListenerMap } from "@solid-primitives/event-listener";
import { access, type MaybeAccessor } from "@solid-primitives/utils";
import { createEffect, createSignal, type Accessor } from "solid-js";

export const createFocusVisible = (
  target: MaybeAccessor<HTMLElement>
): Accessor<boolean> => {
  const [visible, setVisible] = createSignal(false);

  createEffect(() => {
    createEventListenerMap(
      target,
      {
        focusin: (event) => {
          setVisible((event.currentTarget as Element).matches(":focus-visible"));
        },
        focusout: () => {
          setVisible(false);
        },
        pointerdown: () => {
          setVisible(false)
        },
      }
    );
  });
  return visible;
}

export * from "./raf";
