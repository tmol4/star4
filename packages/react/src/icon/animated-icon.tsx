import { createIdentifiableElement } from "@star4/react-utils";
import { createContext, forwardRef, memo, useContext, useMemo, type ReactNode } from "react";

export type AnimatedIconContext = {
  hovered: boolean;
  focused: boolean;
  pressed: boolean;
  dragged: boolean;
  selected: boolean;
  disabled: boolean;
  error: boolean;
}
const AnimatedIconDataContext = createContext<AnimatedIconContext | undefined>(undefined);

export const useAnimatedIconData = () => {
  return useContext(AnimatedIconDataContext);
}

export const useAnimatedIconDataWithDefaults = (
  {
    hovered = false,
    focused = false,
    pressed = false,
    dragged = false,
    selected = false,
    disabled = false,
    error = false,
  }: Partial<AnimatedIconContext> = {},
): AnimatedIconContext => {
  const context = useAnimatedIconData();
  return context ?? {
    hovered,
    focused,
    pressed,
    dragged,
    selected,
    disabled,
    error,
  };
}

export namespace AnimatedIconProvider {
  export type Props = {
    hovered?: boolean;
    focused?: boolean;
    pressed?: boolean;
    dragged?: boolean;
    selected?: boolean;
    disabled?: boolean;
    error?: boolean;
    children: ReactNode;
  }
}

const AnimatedIconDataProviderComponent = function AnimatedIconProvider(
  {
    hovered = false,
    focused = false,
    pressed = false,
    dragged = false,
    selected = false,
    disabled = false,
    error = false,
    children,
  }: AnimatedIconProvider.Props
) {
  const context = useMemo<AnimatedIconContext>(
    () => ({
      hovered, focused, pressed, dragged, selected, disabled, error,
    }),
    [hovered, focused, pressed, dragged, selected, disabled, error]
  );
  return (
    <AnimatedIconDataContext.Provider
      value={context}
      children={children} />
  )
}

export const AnimatedIconDataProvider = Object.assign(
  memo(AnimatedIconDataProviderComponent),
  createIdentifiableElement("IS_ANIMATED_ICON_DATA_PROVIDER"),
);
