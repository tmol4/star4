// import { createContext, createEffect, createMemo, createRoot, createSignal, createUniqueId, For, getOwner, onCleanup, runWithOwner, sharedConfig, useContext, type Accessor, type Component, type FlowComponent, type JSX, type Ref } from "solid-js";
// import { insert, Portal } from "solid-js/web";
// import { ReactiveMap } from "@solid-primitives/map";

// export namespace Overlay {
//   export type Props = {
//     children: JSX.Element;
//   }
// }

// const OverlayContext = createContext<Context>();
// const useOverlay = () => useContext(OverlayContext);

// type Context = {
//   add: (id: string, element: Accessor<JSX.Element>) => void;
//   remove: (id: string) => void;
// }

// export const OverlayProvider: FlowComponent = (props) => {
//   let ref!: HTMLElement;

//   const overlays = new ReactiveMap<string, JSX.Element>();
//   const elements = createMemo(() => [...overlays.values()]);

//   return (
//     <OverlayContext.Provider
//       value={{
//         add: (id, element) => {
//           overlays.set(id, element);
//         },
//         remove: (id) => overlays.delete(id),
//       }}>
//         {props.children}
//         <div ref={ref as HTMLDivElement}>
//           <For each={elements()}>{
//             (element, index) => element,
//           }</For>
//         </div>
//     </OverlayContext.Provider>
//   )
// }

// export const Overlay: FlowComponent<Overlay.Props> = (props) => {
//   const marker = document.createTextNode("");
//   const owner = getOwner();
//   let content: undefined | Accessor<JSX.Element>;
//   let hydrating = !!sharedConfig.context;

//   const { add, remove } = useOverlay()!;

//   const id = createUniqueId();


//   createEffect(
//     () => {
//       // basically we backdoor into a sort of renderEffect here
//       if (hydrating) (getOwner() as any).user = hydrating = false;
//       content ||= runWithOwner(owner, () => createMemo(() => props.children));
//       // const container = mount();

//       // const container = createElement(props.isSVG ? "g" : "div", props.isSVG),
//       //   renderRoot = container;

//       // Object.defineProperty(
//       //   container,
//       //   "_$host",
//       //   {
//       //     get() {
//       //       return marker.parentNode;
//       //     },
//       //     configurable: true
//       //   }
//       // );
//       // insert(container, content);
//       // container.appendChild(container);
//       // props.ref && (props.ref as any)(container);

//       onCleanup(() => remove(id));

//     },
//     undefined,
//     { render: !hydrating }
//   );

//   return marker;
// }


// // const { useShadow } = props,
// // marker = document.createTextNode(""),
// // mount = () => props.mount || document.body,
// // owner = getOwner();
// // let content;
// // let hydrating = !!sharedConfig.context;
// // createEffect(
// // () => {
// //   if (hydrating) getOwner().user = hydrating = false;
// //   content || (content = runWithOwner(owner, () => createMemo(() => props.children)));
// //   const el = mount();
// //   if (el instanceof HTMLHeadElement) {
// //     const [clean, setClean] = createSignal(false);
// //     const cleanup = () => setClean(true);
// //     createRoot(dispose => insert(el, () => (!clean() ? content() : dispose()), null));
// //     onCleanup(cleanup);
// //   } else {
// //     const container = createElement(props.isSVG ? "g" : "div", props.isSVG),
// //       renderRoot =
// //         useShadow && container.attachShadow
// //           ? container.attachShadow({
// //               mode: "open"
// //             })
// //           : container;
// //     Object.defineProperty(container, "_$host", {
// //       get() {
// //         return marker.parentNode;
// //       },
// //       configurable: true
// //     });
// //     insert(renderRoot, content);
// //     el.appendChild(container);
// //     props.ref && props.ref(container);
// //     onCleanup(() => el.removeChild(container));
// //   }
// // },
// // undefined,
// // {
// //   render: !hydrating
// // }
// // );
// // return marker;
