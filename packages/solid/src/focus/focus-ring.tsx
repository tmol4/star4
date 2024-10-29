import { type Ref, type Accessor, type Component, createEffect, createSignal, type JSX, onCleanup, splitProps, onMount, Show, createMemo } from "solid-js";
import { createEventListenerMap } from "@solid-primitives/event-listener";
import { type MaybeAccessor, access, tryOnCleanup } from "@solid-primitives/utils";
import clsx from "clsx/lite";
import { createFocusVisible } from "../utils";
import { autoUpdate, computePosition, offset, size, type ComputePositionConfig, } from "@floating-ui/dom";
import { createMutationObserver } from "@solid-primitives/mutation-observer";
import { createStore } from "solid-js/store";

import { styles } from "./focus-ring.css";
import { Portal } from "solid-js/web";
import { Popover } from "../popover";


export namespace FocusRing {
  export type Props =
    & Omit<
      JSX.HTMLAttributes<HTMLElement>,
      | keyof JSX.CustomEventHandlersLowerCase<HTMLElement>
      | keyof JSX.CustomEventHandlersCamelCase<HTMLElement>
      | "ref" | "children"
    >
    & {
      ref?: Ref<Element>;
      for: MaybeAccessor<HTMLElement>;
      show?: boolean;
    };
  export interface Element extends HTMLElement {
    focusVisible: Accessor<boolean>;
  }
}

type State = {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const FocusRing: Component<FocusRing.Props> = (props) => {
  const [local, others] = splitProps(
    props,
    ["ref", "for", "show", "class"],
  );

  const visible = createFocusVisible(() => access(local.for));

  let ref!: HTMLElement;

  const [state, setState] = createStore<State>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  // createEffect(() => {
  //   if(!local.ref) return;

  //   Object.defineProperty(
  //     ref,
  //     "focusVisible",
  //     {
  //       configurable: true,
  //       value: visible,
  //     },
  //   );

  //   (local.ref as ((element: FocusRing.Element) => void))(ref as FocusRing.Element);
  // });

  const applyStyle = (target: HTMLElement) => {
    let style = getComputedStyle(target);
    while (style.borderRadius === "inherit" && target.parentElement) {
      style = getComputedStyle(target.parentElement);
    }
    ref.style.borderRadius = style.borderRadius;
  }

  const show = createMemo(() => local.show ?? visible());

  const observer = new MutationObserver(
    records => applyStyle(records[0].target as HTMLElement),
  );
  createEffect(() => {
    if(!show()) return;
    const target = access(local.for);
    applyStyle(target);
    observer.observe(
      target,
      { attributes: true, attributeFilter: ["class", "style"] },
    );
    const cleanup = () => observer.disconnect();
    onCleanup(cleanup);
  });


  createEffect(() => {
    if(!show()) return;

    const reference = access(local.for);
    const floating = ref;
    const options: Partial<ComputePositionConfig> = {
      strategy: "absolute",
      placement: "bottom-start",
      middleware: [
        offset(({ rects }) => {
          return -rects.reference.height;
        }),
        size({
          apply({ elements,  }) {
            const rect = elements.reference.getBoundingClientRect();
            setState({
              width: rect.width,
              height: rect.height
            });
          },
        }),
      ],
    };
    const cleanup = autoUpdate(
      reference,
      floating,
      () => {
        computePosition(reference, floating, options)
          .then(
            ({ x, y }) => setState({ x, y }),
          )
      },
    );
    onCleanup(cleanup);
  });

  return (
    <Popover open={show()}>
      <div
        ref={ref as HTMLDivElement}
        class={clsx(
          styles.focusRing({
            visible: show(),
          }),
          local.class,
        )}
        style={{
          left: `${state.x}px`,
          top: `${state.y}px`,
          width: `${state.width}px`,
          height: `${state.height}px`,
        }}
        {...others} />
    </Popover>
  )
}
