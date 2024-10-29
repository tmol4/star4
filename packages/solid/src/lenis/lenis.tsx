import { createContext, createEffect, createMemo, createSignal, createUniqueId, mergeProps, on, onCleanup, splitProps, useContext, type Accessor, type FlowComponent, type JSX, type Ref, type Signal } from "solid-js";

import { default as Instance, type LenisOptions, type ScrollCallback } from "lenis";
import { createRaf } from "../utils";
import { ReactiveSet } from "@solid-primitives/set";
import { createTrigger } from "@solid-primitives/trigger";
import { access, type MaybeAccessor } from "@solid-primitives/utils";


export namespace Lenis {
  type SharedProps = {
    options?: Omit<
      LenisOptions,
      "wrapper" | "content"
    >;
    children: JSX.Element;
  }

  type RootProps =
    & { root: true }
    & SharedProps;
  type WrapperProps =
    & Omit<
      JSX.HTMLAttributes<HTMLElement>,
      "ref" | "children"
    >
    & {
      root?: false;
      content?: MaybeAccessor<HTMLElement>;
    }
    & SharedProps;
  type CustomProps =
    & {
      root?: false;
      wrapper: MaybeAccessor<HTMLElement>;
      content?: MaybeAccessor<HTMLElement>;
    }
    & SharedProps;

  export type Props =
    | RootProps
    | WrapperProps
    | CustomProps;

  export type MergedProps =
    & Omit<
      JSX.HTMLAttributes<HTMLElement>,
      "ref" | "children"
    >
    & {
      ref?: Ref<Element>;
      root: boolean;
      wrapper?: MaybeAccessor<HTMLElement>;
      content?: MaybeAccessor<HTMLElement>;
      options: Omit<
        LenisOptions,
        "wrapper" | "content"
      >;
      children: JSX.Element;
    };

  export interface Element {
    instance: Instance;
    wrapper: HTMLElement;
    content: HTMLElement;
  }

  export type Context = {
    id: string;
    lenis: Accessor<Instance>;
    // useOnScroll: Accessor<Instance>;
    createScrollListener: (callback: ScrollCallback) => void;
  }
}

export const Lenis: FlowComponent<Lenis.Props> = (props) => {
  const mergedProps = mergeProps(
    {
      root: false,
      options: {},
    },
    props,
  ) as Lenis.MergedProps;

  const [local, others] = splitProps(
    mergedProps,
    ["ref", "root", "wrapper", "content", "options", "children"],
  );

  const [lenis, setLenis] = createSignal<Instance>();
  const [, start, stop] = createRaf(time => lenis()?.raf(time));

  let wrapperRef: HTMLElement;
  let contentRef: HTMLElement;

  createEffect( //? Add a on() wrapper here with props.root and props.options
    () => {
      const wrapper = access(local.wrapper) ?? wrapperRef;
      const content = access(local.content) ?? contentRef;
      const newLenis = new Instance({
        ...local.options,
        ...(
          !local.root &&
          { wrapper, content }
        ),
      });

      setLenis(newLenis);
      start();

      const ref = local.ref as ((element: Lenis.Element) => void) | undefined;
      ref?.({
        instance: newLenis,
        wrapper,
        content,
      });


      onCleanup(() => {
        stop();
        lenis()?.destroy();
        setLenis();
      });
    }
  );

  const callbacks = new ReactiveSet<ScrollCallback>();

  createEffect(on(
    [lenis as Accessor<Instance>, () => callbacks],
    ([instance, callbacks], prev) => {
      const [prevInstance, prevCallbacks] = prev ?? [];
      if(prevInstance === instance) {
        const oldCallbacks = prevCallbacks?.difference(callbacks) ?? new Set();
        const newCallbacks = prevCallbacks ? callbacks.difference(prevCallbacks) : callbacks;

        oldCallbacks.forEach(
          callback => instance.off("scroll", callback),
        );

        newCallbacks.forEach(callback =>
          instance.on("scroll", callback),
        );
      } else {
        // old instance was destroyed, events automatically cleared
        callbacks.forEach(
          callback => instance.on("scroll", callback),
        );
      }
    }
  ));

  // const addCallback = (callback: ScrollCallback) => {
  //   lenis()?.on("scroll", callback);
  // }
  // const removeCallback = (callback: ScrollCallback) => {
  //   lenis()?.off("scroll", callback);
  // }

  const createScrollListener = (callback: ScrollCallback) => {
    callbacks.add(callback);

    onCleanup(() => callbacks.delete(callback));
  }


  const children = createMemo<JSX.Element>(() => {
    if(local.root) return local.children;

    const content = local.content ? local.children : (
      <div ref={contentRef as HTMLDivElement}>{local.children}</div>
    );
    const wrapper = local.wrapper ? content : (
      <div ref={wrapperRef as HTMLDivElement} {...others}>{content}</div>
    );

    return wrapper;
  });

  const id = createUniqueId();

  return (
    <LenisContext.Provider
      value={{
        id,
        lenis: lenis as Accessor<Instance>,
        createScrollListener,
      }}
      children={children()} />
  );
}


const LenisContext = createContext<Lenis.Context>();
export const useLenis = () => useContext(LenisContext);

