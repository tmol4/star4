import { atom, deepMap, map, type Store, type PreinitializedWritableAtom } from "nanostores";
import { useStore } from "@nanostores/react";

export type StoreBuilders = {
  atom: typeof atom,
  map: typeof map,
  deepMap: typeof deepMap,
};

export type CreateStoreBuilder<S extends Store> = (builders: StoreBuilders) => S;

export const createStore = <S extends Store>(builder: CreateStoreBuilder<S>): S => {
  return builder({ atom, map, deepMap });
}

export {
  useStore,
};
