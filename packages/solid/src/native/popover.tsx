import { createEffect, mergeProps, on, Show, type FlowComponent } from "solid-js";
import { Portal } from "solid-js/web";
import { styles } from "./popover.css";

const SUPPORTS_POPOVER =
  "popover" in HTMLElement.prototype &&
  "showPopover" in HTMLElement.prototype &&
  typeof HTMLElement.prototype.showPopover === "function";


export namespace Popover {
  export type Props = {
    open?: boolean;
  }
}
const NativePopover: FlowComponent<Popover.Props> = (props) => {
  let ref!: HTMLElement;

  createEffect(on(
    () => props.open,
    (open) => {
      if(open) {
        ref.showPopover();
      } else {
        ref.hidePopover();
      }
    },
  ));

  return (
    <div
      ref={ref as HTMLDivElement}
      class={styles.native}
      popover="manual"
      children={props.children} />
  );
}
const PortalPopover: FlowComponent<Popover.Props> = (props) => {
  return (
    <Show when={props.open}>
      <Portal>
        {props.children}
      </Portal>
    </Show>
  )
}

export const Popover = SUPPORTS_POPOVER ? NativePopover : PortalPopover;
