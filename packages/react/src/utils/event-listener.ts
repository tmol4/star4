// import { useEffect, useRef, type RefObject } from "react";


// import { useIsomorphicLayoutEffect } from "."

// // export function useEventListener<K extends keyof MediaQueryListEventMap>(
// //   eventName: K,
// //   handler: (event: MediaQueryListEventMap[K]) => void,
// //   element: RefObject<MediaQueryList>,
// //   options?: boolean | AddEventListenerOptions,
// // ): void

// // export function useEventListener<K extends keyof WindowEventMap>(
// //   eventName: K,
// //   handler: (event: WindowEventMap[K]) => void,
// //   element: Window,
// //   options?: boolean | AddEventListenerOptions,
// // ): void

// // export function useEventListener<
// //   K extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
// //   T extends Element = K extends keyof HTMLElementEventMap
// //     ? HTMLDivElement
// //     : SVGElement,
// // >(
// //   eventName: K,
// //   handler:
// //     | ((event: HTMLElementEventMap[K]) => void)
// //     | ((event: SVGElementEventMap[K]) => void),
// //   element: RefObject<T>,
// //   options?: boolean | AddEventListenerOptions,
// // ): void

// // export function useEventListener<K extends keyof DocumentEventMap>(
// //   eventName: K,
// //   handler: (event: DocumentEventMap[K]) => void,
// //   element: RefObject<Document>,
// //   options?: boolean | AddEventListenerOptions,
// // ): void

// // export function useEventListener<
// //   KW extends keyof WindowEventMap,
// //   KH extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
// //   KM extends keyof MediaQueryListEventMap,
// //   T extends HTMLElement | SVGAElement | MediaQueryList = HTMLElement,
// // >(

// interface Listenable<T extends Record<string, Event>> {
//   addEventListener<K extends keyof T>(
//     type: K,
//     callback: ((event: T[K]) => void) | null,
//     options?: AddEventListenerOptions | boolean,
//   ): void;
//   removeEventListener<K extends keyof T>(
//     type: K,
//     callback: ((event: T[K]) => void) | null,
//     options?: EventListenerOptions | boolean,
//   ): void;
// }

// type EventMap<T> = T extends Listenable<infer U> ? U : never;
// type EventCallback<T> = T extends Listenable<infer U> ? U : never;



// // export function useEventListener<
// //   KW extends keyof WindowEventMap,
// //   KH extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
// //   KM extends keyof MediaQueryListEventMap,
// //   T extends HTMLElement | SVGAElement | MediaQueryList = HTMLElement,
// // >(
// //   eventName: KW | KH | KM,
// //   handler: (
// //     event:
// //       | WindowEventMap[KW]
// //       | HTMLElementEventMap[KH]
// //       | SVGElementEventMap[KH]
// //       | MediaQueryListEventMap[KM]
// //       | Event,
// //   ) => void,
// //   element?: RefObject<T>,
// //   options?: boolean | AddEventListenerOptions,
// // )
// export const useEventListener = <
//   T extends Listenable<Record<string, Event>>,
//   N extends keyof U,
//   U extends EventMap<T> = EventMap<T>,

// >(
//   eventName: N,
//   callback: (event: U[N]) => void,
//   element?: RefObject<T>,
//   options?: boolean | AddEventListenerOptions,
// ) => {
//   // Create a ref that stores handler
//   const savedHandler = useRef(callback)

//   useIsomorphicLayoutEffect(() => {
//     savedHandler.current = callback
//   }, [callback])

//   useEffect(() => {
//     // Define the listening target
//     const targetElement: T | Window | undefined = element?.current ?? window

//     if (!(targetElement && targetElement.addEventListener)) return

//     // Create event listener that calls handler function stored in ref
//     const listener: typeof callback = event => {
//       savedHandler.current(event)
//     }

//     targetElement.addEventListener(eventName, listener, options)

//     // Remove event listener on cleanup
//     return () => {
//       targetElement.removeEventListener(eventName, listener, options)
//     }
//   }, [eventName, element, options])
// }
