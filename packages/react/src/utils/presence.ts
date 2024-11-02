import { useEffect, useMemo, useState } from "react";

export type PresenceTransitionDuration =
  | number
  | [enter: number, exit: number];

export type UsePresenceOptions<T> = {
  source: T;
  initialEnter?: boolean;
  transitionDuration: number | [enter: number, exit: number];
}

export type UsePresenceReturn<T> = {
  mountedItem: T;
  isVisible: boolean;
  isMounted: boolean;
  isEntering: boolean;
  isExiting: boolean;
  isAnimating: boolean;
}

const usePresenceBase = (
  {
    source,
    initialEnter = false,
    transitionDuration
  }: UsePresenceOptions<boolean>,
): UsePresenceReturn<boolean> => {
  const initialState = initialEnter ? false : source;
  const [isMounted, setIsMounted] = useState(initialState);
  const [hasEntered, setHasEntered] = useState(initialState);
  const [isVisible, setIsVisible] = useState(initialState);

  const isExiting = useMemo(() => isMounted && !source, [source, isMounted]);
  const isEntering = useMemo(() => source && !hasEntered, [source, hasEntered]);
  const isAnimating = useMemo(() => isEntering || isExiting, [isEntering, isExiting]);

  const enterDuration = useMemo(
    () => typeof transitionDuration === "number"
      ? transitionDuration
      : transitionDuration[0],
    [transitionDuration],
  );
  const exitDuration = useMemo(
    () => typeof transitionDuration === "number"
      ? transitionDuration
      : transitionDuration[1],
    [transitionDuration],
  );

  useEffect(
    () => {
      if(source) {
        setIsMounted(true);
      } else {
        setHasEntered(false);
        setIsVisible(false);

        const timeoutId = setTimeout(
          () => setIsMounted(false),
          exitDuration,
        );

        return () => clearTimeout(timeoutId);
      }
    },
    [source, exitDuration],
  );
  useEffect(
    () => {
      if (source && isMounted && !isVisible) {
        document.body.offsetHeight; // force reflow

        const animationFrameId = requestAnimationFrame(() => {
          setIsVisible(true);
        });

        return () => cancelAnimationFrame(animationFrameId);
      }
    },
    [source, isMounted, isVisible],
  );

  useEffect(
    () => {
      if (isVisible && !hasEntered) {
        const timeoutId = setTimeout(
          () => setHasEntered(true),
          enterDuration,
        );

        return () => clearTimeout(timeoutId);
      }
    },
    [isVisible, hasEntered, enterDuration],
  );

  return {
    mountedItem: isMounted,
    isAnimating,
    isEntering,
    isExiting,
    isMounted,
    isVisible,
  };
}
const itemShouldBeMounted = <T>(item: T) => item !== false && item != null;

export const usePresence = <T>(
  { source: item, ...options }: UsePresenceOptions<T>,
): UsePresenceReturn<T> => {
  const [mountedItem, setMountedItem] = useState(item);
  const [shouldBeMounted, setShouldBeMounted] = useState(itemShouldBeMounted(item));
  const { isMounted, ...rest } = usePresenceBase({
    ...options,
    source: shouldBeMounted,
  });
  useEffect(
    () => {
      if (mountedItem !== item) {
        if (isMounted) {
          setShouldBeMounted(false);
        } else if (itemShouldBeMounted(item)) {
          setMountedItem(() => item);
          setShouldBeMounted(true);
        }
      } else if (!itemShouldBeMounted(item)) {
        setShouldBeMounted(false);
      } else if (itemShouldBeMounted(item)) {
        setShouldBeMounted(true);
      }
    },
    [item, mountedItem, isMounted]
  );

  const isItemMounted = useMemo(
    () => isMounted && mountedItem !== undefined,
    [isMounted, mountedItem],
  );

  return {
    ...rest,
    isMounted: isItemMounted,
    mountedItem,
  };
}
