import { forwardRef, useId, useMemo, type ForwardRefExoticComponent, type PropsWithoutRef, type ReactNode, type RefAttributes, type WeakValidationMap } from "react";
import { ListItem } from "../list";
import { Radio } from "./radio";
import type { ComposableForwardRefExoticComponent, ForwardRefExoticComponentProps } from "@star4/react-utils";

export namespace RadioListItem {
  export type Props<T extends Radio.Value> =
    & (Radio.AutomaticControlledProps<T> | Radio.ManualControlledProps)
    & {
      overline?: ReactNode;
      headline?: ReactNode;
      supportingText?: ReactNode;
      secondary?: ReactNode;
    };
  export interface Element extends ListItem.Element {}
}

export const RadioListItem = forwardRef<RadioListItem.Element, RadioListItem.Props<Radio.Value>>(
  (
    {
      checked,
      groupValue,
      value,
      onValueChange,
      overline,
      headline,
      supportingText,
      secondary,
    },
    forwardedRef
  ) => {
    const id = useId();
    const manual = useMemo(() => checked !== undefined, [checked]);
    const isChecked = useMemo(() => manual ? checked : value === groupValue, [manual, checked, value, groupValue]);

    return (
      <ListItem
        ref={forwardedRef}
        selected={checked}
        onClick={() => (
          onValueChange as (value: Radio.Value | boolean) => void
        )?.(manual || value!)}
        leading={
          <Radio
            id={id}
            {...manual
              ? { checked: checked! } as any
              : { groupValue: groupValue!, value: value!, onValueChange }
            } />
        }
        overline={overline}
        headline={
          <label htmlFor={id} style={{ display: "contents" }}>{headline}</label>
        }
        supportingText={supportingText}
        trailing={secondary} />
    )
  }
) as ComposableForwardRefExoticComponent<
  ExoticProps<Radio.Value>,
  <T extends Radio.Value>(props: ExoticProps<T>) => ReactNode
>;

type ExoticProps<T extends Radio.Value> = ForwardRefExoticComponentProps<RadioListItem.Element, RadioListItem.Props<T>>;
