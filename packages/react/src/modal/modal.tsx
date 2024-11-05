import { createContext, forwardRef, useContext, useEffect, useImperativeHandle, useRef, type FC, type ForwardedRef, type HTMLAttributes, type ReactNode } from "react"
import { createPortal } from "react-dom";
import clsx from "clsx/lite";
import { styles } from "./modal.css";

export namespace Modal {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & {
      open?: boolean;
      onCancel?: () => void;
      children?: ReactNode;
    };

  export interface Element extends HTMLElement {}
}

type InternalModalContextData = {
  isOpen: boolean;
  close: () => void;
}

const InternalModalContext = createContext<InternalModalContextData | undefined>(undefined);
const useInternalModalContext = () => useContext(InternalModalContext);

const NativeModal = forwardRef<Modal.Element, Modal.Props>(
  function Modal(
    {
      className,
      open = false,
      onCancel,
      children,
      ...rest
    },
    forwardedRef,
  ) {
    const ref = useRef<HTMLDialogElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
      [],
    );

    useEffect(
      () => {
        if(!ref.current) return;
        if(open) {
          ref.current.showModal();
        } else {
          ref.current.close();
        }
      },
      [open],
    );
    const context: InternalModalContextData = {
      isOpen: open,
      close: () => onCancel?.(),
    };

    return (
      <dialog
        ref={ref}
        className={clsx(className, styles.native)}
        onCancel={
          onCancel
            ? (event) => {
              event.preventDefault();
              onCancel();
            }
            : undefined
        }
        {...rest}>
          <InternalModalContext.Provider
            value={context}
            children={children} />
      </dialog>
    );
  }
);

const PortalModal = forwardRef<Modal.Element, Modal.Props>(
  function Modal(
    {
      className,
      open = false,
      onCancel,
      children,
      ...rest
    },
    forwardedRef
  ) {
    const ref = useRef<HTMLDivElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
      [],
    );

    const context: InternalModalContextData = {
      isOpen: open,
      close: () => onCancel?.(),
    };

    return createPortal(
      open && (
        <div
          ref={ref}
          className={clsx(className, styles.portal)}
          {...rest}>
            <InternalModalContext.Provider
              value={context}
              children={children} />
        </div>
      ),
      document.body,
    );
  },
);


export namespace Modal {
  export namespace Backdrop {
    export type Props =
      & Omit<
        HTMLAttributes<HTMLElement>,
        "children"
      >
      & {

      };

    export interface Element extends HTMLElement {}
  }
}

const Backdrop = forwardRef<Modal.Backdrop.Element, Modal.Backdrop.Props>(
  function ModalBackdrop(
    {
      className,
      ...rest
    },
    forwardedRef,
  ) {
    const { isOpen, close } = useInternalModalContext()!;

    return (
      <div
        ref={forwardedRef as ForwardedRef<HTMLDivElement>}
        className={clsx(
          styles.backdrop({}),
          className,
        )}
        onClick={close}
        {...rest} />
    );
  }
)
const SUPPORTS_NATIVE =
  "HTMLDialogElement" in window &&
  typeof HTMLDialogElement === "function";

export const Modal = Object.assign(
  SUPPORTS_NATIVE ? NativeModal : PortalModal,
  { Backdrop },
);
