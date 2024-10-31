import { createEffect, mergeProps, on, splitProps, type FlowComponent, type JSX, type Ref } from "solid-js";
import { Dynamic, Portal, Show, spread } from "solid-js/web";
import { mergeRefs } from "@solid-primitives/refs";
import { clsx } from "clsx/lite";

import { styles } from "./modal.css";

export namespace Modal {
  export type Props =
    & Omit<
      JSX.HTMLAttributes<HTMLElement>,
      "ref" | "children"
    >
    & {
      ref?: Ref<Element>;
      open: boolean;
      onOpenChange?: (value: boolean) => void;
      children: JSX.Element;
    };
  export interface Element extends HTMLElement {}
}

const PortalModal: FlowComponent<Modal.Props> = (props) => {
  const mergedProps = mergeProps(
    { open: false },
    props,
  );
  const [local, others] = splitProps(
    mergedProps,
    ["ref", "class", "open", "onOpenChange", "children"],
  );

  let ref!: HTMLElement;

  createEffect(() => {
    const className = clsx(styles.portal, local.class);
    ref.classList.add(className);
    spread(ref, others, false, true);
  });

  return (
    <Show when={props.open}>
      <Portal
        ref={mergeRefs(element => ref = element, local.ref)}
        mount={document.body}>
          {local.children}
      </Portal>
    </Show>
  )
}

const NativeModal: FlowComponent<Modal.Props> = (props) => {
  const mergedProps = mergeProps(
    { open: false },
    props,
  );
  const [local, others] = splitProps(
    mergedProps,
    ["ref", "class", "open", "onOpenChange", "children"],
  );
  let ref!: HTMLDialogElement;

  createEffect(on(
    () => local.open,
    (open) => {
      if(open) {
        ref.showModal();
      } else {
        ref.close();
      }
    }
  ));

  const onCancel: JSX.EventHandler<HTMLDialogElement, Event> = (event) => {
    event.preventDefault();
    local.onOpenChange?.(false);
  }

  return (
    <dialog
      ref={mergeRefs(
        element => ref = element as HTMLDialogElement,
        local.ref
      )}
      class={
        clsx(styles.native, local.class)
      }
      onCancel={onCancel}
      {...others}>
        {local.children}
    </dialog>
  )
}


const SUPPORTS_NATIVE =
  "HTMLDialogElement" in window &&
  typeof HTMLDialogElement === "function";

export const Modal = SUPPORTS_NATIVE ? NativeModal : PortalModal;
