export * from "./use-isomorphic-layout-effect";
export * from "./use-media-query";
export * from "./use-event-listener";
export * from "./use-svg";
export * from "./use-map";

export const wait = (timeout: number) => new Promise<void>(resolve => setTimeout(resolve, timeout));
