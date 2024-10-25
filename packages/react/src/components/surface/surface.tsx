import { createContext, forwardRef, useContext, useEffect, type ReactNode, type Ref, type RefObject } from "react";
import { useEventListener } from "../../utils";

export namespace Surface {
  export type Props = {
    for: RefObject<HTMLElement>;
  }

  export namespace Theme {
    export type Data = {

    }
  }
}


const SurfaceComponent = forwardRef<HTMLElement, Surface.Props>(
  ({
    for: target,
    ...rest
  }, ref) => {
    useEventListener("pointerdown", () => {}, target)
    return (
      <div ref={ref as Ref<HTMLDivElement>}>

      </div>
    );
  },
);


const SurfaceThemeContext = createContext<Surface.Theme.Data>({});
export const useSurfaceTheme = () => {
  return useContext(SurfaceThemeContext);
}

const SurfaceTheme = (
  {
    children
  }: { children?: ReactNode },
) => {
  return (
    <SurfaceThemeContext.Provider
      value={{}}
      children={children} />
  );
}


export const Surface = Object.assign(
  SurfaceComponent,
  {
    Theme: SurfaceTheme,
  },
);
