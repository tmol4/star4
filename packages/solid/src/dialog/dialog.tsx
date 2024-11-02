import { createSignal, type Component, type JSX, type Ref } from "solid-js";
import { createPresence } from "@solid-primitives/presence";
import { Modal } from "../native";
// import { makePromise } from "../utils";
import { styles } from "./dialog.css";

export namespace Dialog {
  export type Props = {
    ref?: Ref<Element>;
    open: boolean;

    headline?: JSX.Element;
    actions?: JSX.Element;
  }

  export interface Element {
    modal: JSX.Element;
    container: JSX.Element;
  }
}

export const Dialog: Component<Dialog.Props> = (props) => {
  const [open, setOpen] = createSignal(false);
  const {
    isMounted,
    isEntering,
    isExiting,
    isAnimating,
  } = createPresence(open, {
    enterDuration: 500,
    exitDuration: 150,
  });

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <Modal open={isMounted()} onOpenChange={setOpen} class={styles.modal()}>
        <div
          class={styles.container({
            entering: isEntering(),
            exiting: isExiting(),
          })}>

            <div class={styles.headline()}>
              <h2>{props.headline}</h2>
            </div>

            <div class={styles.actions()}>
              <button onClick={() => setOpen(false)}>Close</button>

            </div>
        </div>
      </Modal>
    </>
  );
}
