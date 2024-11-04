import { isValidElement, useEffect, useId, useMemo, type FC, type ReactNode } from "react";
import { Modal } from "../modal"
import { usePresence } from "@star4/react-utils";
import clsx from "clsx";
import { styles } from "./dialog.css";
import { Divider } from "../divider";

export namespace Dialog {
  export type Props = {
    /**
     * @defaultValue `false`
     */
    open?: boolean;
    onCancel?: () => void;

    /**
     * Icon (optional)
     */
    icon?: ReactNode;
    /**
     * Headline (optional)
     *
     * @remarks
     * A dialog’s purpose should be communicated by its headline and buttons or actionable items.
     *
     * Headlines should:
     * - Contain a brief and clear statement or question.
     * - Avoid apologies (Sorry for the interruption), extra alarm (Warning!), or ambiguity (Are you sure?).
     * - Always be succinct. They can wrap to a second line if necessary, and be truncated.
     * @see {@link https://m3.material.io/components/dialogs/guidelines#0cff8b6b-d4f3-4442-8194-31212f5d1a12|Dialogs - Material Design 3}
     */
    headline?: ReactNode;
    content: ReactNode;
    /**
     * Actions (optional)
     *
     * @remarks
     *
     * Dialog actions are most often represented as buttons and allow users to confirm, dismiss, or acknowledge something.
     *
     * Buttons are aligned to the trailing edge of the dialog for easier interaction. The confirmation button is always closest to the edge.
     * Button alignment responds automatically for right-to-left languages, where the confirmation button is aligned to the left edge.
     *
     * Dialogs should contain a maximum of two actions.
     * - If a single action is provided, it must be an acknowledgement action
     * - If two actions are provided, one must be a confirming action, and the other a dismissing action
     *
     * Providing a third action, such as “Learn more,” is not recommended as it navigates the user away from the dialog, leaving the dialog task unfinished.
     *
     * Rather than adding a third action, an inline expansion can display more information. If more extensive information is needed, provide it prior to entering the dialog.
     *
     * @see {@link https://m3.material.io/components/dialogs/guidelines#befd7f4d-1029-4957-b1b5-da13fc0bbf3c|Dialogs - Material Design 3}
     */
    actions?: ReactNode;
  }
}

// TODO: add full screen dialog, then the following TypeDoc: - Two types: basic and full-screen

/**
 * Basic dialogs interrupt users with urgent information, details, or actions. Common use cases for basic dialogs include alerts, quick selection, and confirmation.
 *
 * @remarks
 *
 * Basic dialogs:
 * - Require the user to take action before it will close.
 * - Can give users the ability to provide confirmation of a choice before committing to it.
 * - Often appear as alerts or lists, but may also use lists, date pickers, and time pickers.
 *
 * General tips:
 * - Use dialogs to make sure users act on information
 * - Should be dedicated to completing a single task
 * - Can also display information relevant to the task
 * - Commonly used to confirm high-risk actions like deleting progress
 *
 * @see {@link https://m3.material.io/components/dialogs/guidelines|Dialogs - Material Design 3}
 */
export const Dialog: FC<Dialog.Props> = ({
  open = false,
  onCancel,
  icon,
  headline,
  content,
  actions,
}) => {
  const headlineId = useId();
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
        role="dialog"
        aria-modal
        aria-labelledby={headlineId}>
          <div className={styles.headline({ entering, exiting })}>
            {icon && (
              <div className={styles.icon}>{icon}</div>
            )}
            {headline && (
              <h2 id={headlineId} className={styles.headlineText({ hasIcon: !!icon })}>{headline}</h2>
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
