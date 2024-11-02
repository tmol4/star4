import { useEffect, useLayoutEffect } from "react";

export * from "./presence";
export * from "./media-query";
export * from "./focus";
export * from "./event-listener";

export const IS_SERVER = typeof window === "undefined";

export const useIsomorphicLayoutEffect =
  IS_SERVER ? useEffect : useLayoutEffect;
