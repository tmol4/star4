import { forwardRef, useMemo, type ForwardRefExoticComponent, type PropsWithoutRef, type ReactNode, type RefAttributes, type WeakValidationMap } from "react";
import { ListItem } from "../list";
import { Radio } from "./radio";
import type { ComposableForwardRefExoticComponent, ForwardRefExoticComponentProps } from "@star4/react-utils";

export namespace RadioListItem {
  export type Props<T extends Value> = {
    groupValue: T;
    value: T;
    onChange: (value?: T) => void;

    overline?: ReactNode;
    headline?: ReactNode;
    supportingText?: ReactNode;
    secondary?: ReactNode;
  }
  export type Value = Radio.Value;
  export interface Element extends ListItem.Element {}
}

export const RadioListItem = forwardRef<RadioListItem.Element, RadioListItem.Props<RadioListItem.Value>>(
  (
    {
      groupValue,
      value,
      onChange,
      overline,
      headline,
      supportingText,
    },
    forwardedRef
  ) => {
    const checked = useMemo(() => value === groupValue, [value, groupValue]);

    return (
      <ListItem
        ref={forwardedRef}
        selected={checked}
        onClick={() => onChange?.(value)}
        leading={
          <Radio
            groupValue={groupValue}
            value={value}
            onChange={onChange} />
        }
        overline={overline}
        headline={headline}
        supportingText={supportingText} />
    )
  }
) as ComposableForwardRefExoticComponent<
  ExoticProps<RadioListItem.Value>,
  <T extends RadioListItem.Value>(props: ExoticProps<T>) => ReactNode
>;

type ExoticProps<T extends RadioListItem.Value> = ForwardRefExoticComponentProps<RadioListItem.Element, RadioListItem.Props<T>>;
