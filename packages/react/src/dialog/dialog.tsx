import { useEffect, type FC, type ReactNode } from "react";
import { Modal } from "../modal"
import { usePresence } from "@star4/react-utils";
import clsx from "clsx";
import { styles } from "./dialog.css";
import { Divider } from "../divider";

export namespace Dialog {
  export type Props = {
    open?: boolean;
    onCancel?: () => void;

    icon?: ReactNode;
    headline?: ReactNode;
    content?: ReactNode;
    actions?: ReactNode;
  }
}

export const Dialog: FC<Dialog.Props> = ({
  open = false,
  onCancel,
  icon,
  headline,
  content,
  actions,
}) => {
  const {
    isMounted,
    isEntering: entering,
    isExiting: exiting,
    // isVisible,
    // isAnimating,
  } = usePresence({
    source: open,
    transitionDuration: [500, 150],
  });

  return (
    <Modal open={isMounted} onCancel={onCancel} className={styles.modal()}>
      <Modal.Backdrop className={styles.scrim({ entering, exiting })} />
      <div
        className={
          styles.container({ entering, exiting })
        }
        role="dialog">
          <div className={styles.headline({ entering, exiting })}>
            {icon && (
              <div className={styles.icon}>{icon}</div>
            )}
            {headline && (
              <h2 className={styles.headlineText}>{headline}</h2>
            )}
            {/* <Divider /> */}
          </div>
          <div className={styles.content({ entering, exiting })}>
            {content}
          </div>
          {actions && (
            <div className={styles.actions({ entering, exiting })}>
              {/* <Divider /> */}
              {actions}
            </div>
          )}
      </div>
    </Modal>
  )
}
