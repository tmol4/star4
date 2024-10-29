import { createContext, useContext, type Accessor, type Context, type FlowComponent, type JSX } from "solid-js"

export type SlotProps<T extends JSX.HTMLAttributes<HTMLElement>> = T;
export type Slot<T extends JSX.HTMLAttributes<HTMLElement>> = FlowComponent<T>;

export type CreateSlotReturn<
  T extends JSX.HTMLAttributes<HTMLElement>
> = [
  slot: Slot<T>,
  useSlot: () => SlotData<T> | undefined,
];

type SlotData<T> = Accessor<T>;

export const createSlot = <
  T extends JSX.HTMLAttributes<HTMLElement>,
  P extends JSX.HTMLAttributes<HTMLElement> = Omit<T, "ref" | "children">
>(): CreateSlotReturn<P> => {
  const Context = createContext<SlotData<P>>();
  return [
    (props) => {
      return (
        <Context.Provider
          value={() => props}
          children={props.children} />
      )
    },
    () => useContext(Context),
  ];
}
