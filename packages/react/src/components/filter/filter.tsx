import { createContext, forwardRef, useContext, useId, useImperativeHandle, useRef, useState, type ForwardedRef, type ReactNode, type RefObject } from "react"
import { createPortal } from "react-dom";


type FilterContextData = {
  ref: RefObject<SVGSVGElement>;
}
const FilterContext = createContext<FilterContextData | null>(null);

export namespace Filter.Provider {
  export type Props = {
    children?: ReactNode;
  }
}

const FilterProvider = forwardRef<SVGSVGElement, Filter.Provider.Props>(
  (
    {
      children
    },
    forwardedRef,
  ) => {
    const ref = useRef<SVGSVGElement>(null);
    const [filters, setFilters] = useState([]);

    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
    );

    return (
      <FilterContext.Provider
        value={{
          ref,
        }}>
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg">
              <defs>

              </defs>
          </svg>
          {children}
      </FilterContext.Provider>
    )
  },
);

export namespace Filter {
  export type Props = {

  }
}

const FilterComponent = forwardRef<SVGFilterElement, Filter.Props>(
  (
    {

    },
    forwardedRef,
  ) => {
    const id = useId();
    const { ref: parentRef } = useContext(FilterContext)!;

    return parentRef.current && createPortal(
      <filter ref={forwardedRef} id={id}>

      </filter>,
      parentRef.current,
    );
    // return (
    //   <filter id={id}>

    //   </filter>
    // );
  },
);



export const Filter = Object.assign(
  FilterComponent,
  {
    Provider: FilterProvider,
  },
);
