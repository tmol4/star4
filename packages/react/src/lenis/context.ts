import { createStore, useStore } from "@star4/react-utils";
import { default as LenisInstance } from "lenis";
import { createContext, useContext } from "react";
import { Lenis } from "./lenis";
import type { LenisContent } from "./content";


export const LenisStore = createStore(
  ({ atom }) => atom<Lenis.Context | undefined>(),
);
export const LenisContext = createContext<Lenis.Context | undefined>(undefined);

export type UseLenisOptions = {
  root?: boolean;
}
export const useLenis = ({ root }: UseLenisOptions = {}): Lenis.Context | undefined => {
  if(root) return useStore(LenisStore);
  const context = useContext(LenisContext);
  const forceLocal = root === false;
  if(!context && !forceLocal) return useStore(LenisStore);
  return context;
}

export type LenisInternalContext = {
  setContent: (element: LenisContent.Element) => void;
  removeContent: (element: LenisContent.Element) => void;
}
export const LenisInternalContext = createContext<LenisInternalContext | undefined>(undefined);
export const useLenisInternalContext = () => {
  const context = useContext(LenisInternalContext);
  if(!context) throw new Error(
    "[star4]: <Lenis.Content> must be a direct child of <Lenis.Wrapper>",
  );
  return context;
}
