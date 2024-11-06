import { useEffect, useMemo, useRef, type DependencyList } from "react"

export const usePrevious = <T>(factory: () => T, deps: DependencyList): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = factory();
  }, [deps]);
  return ref.current;
}

export const usePreviousState = <T>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
