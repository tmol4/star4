import { createDynamicColorScheme, createStaticColorScheme, hexFromArgb, type Brightness, type DynamicColorScheme, type DynamicColorSchemeVariant, type StaticColorScheme } from "@star4/theme/material";
import { SHAPE_DEFAULTS, THEME, type ColorTokens, type ShapeTokens, type ThemeTokens } from "./tokens";
import { resolveHct, type DeepPartial, type MaybeHct, type ResolveTokens } from "./utils";
import { TYPEFACE_DEFAULTS, type TypefaceTokens } from "./tokens/reference/typeface.css";
import { TYPESCALE_DEFAULTS } from "./tokens/system/typescale.css";
import { MOTION_DEFAULTS } from "./tokens/system/motion.css";
import { STATE_DEFAULTS, type StateTokens } from "./tokens/system/state.css";
import { COMPONENT_DEFAULTS } from "./tokens/components";
import { ICON_DEFAULTS } from "./tokens/components/icon.css";
import { MATERIAL_SYMBOL_DEFAULTS } from "./tokens/components/material-symbols.css";
import { RIPPLE_DEFAULTS } from "./tokens/components/ripple.css";
import { RADIO_DEFAULTS, RADIO_TOKENS } from "./tokens/components/radio.css";

export type CreateContractOptions = {

}


// export type CreateThemeReturn<T> = {
//   contract: () => void;
//   theme: (brightness: Brightness) => void;
// };


export type ContractOptions = {

}
export type ThemeOptions = {

}


export type StaticColorSchemeOptions = {
}
export type DynamicColorSchemeOptions = {
  variant: DynamicColorSchemeVariant;
  sourceColor: MaybeHct;
  contrastLevel?: number;
}

export type CreateThemeOptions = {
  color: StaticColorSchemeOptions | DynamicColorSchemeOptions;
  typeface?: DeepPartial<ResolveTokens<TypefaceTokens, string>>;
  shape?: DeepPartial<ResolveTokens<ShapeTokens, string>>;
  state?: DeepPartial<ResolveTokens<StateTokens, string>>;
  component: {
    materialSymbol: {
      font: string;
    };
  };
}

export const createTheme = (
  {
    typeface,
    state,
    shape,
    ...options
  }: CreateThemeOptions,
) => {
  return {
    contract: () => {
      return THEME;
    },
    theme: (brightness: Brightness) => {
      let scheme: StaticColorScheme | DynamicColorScheme;
      if("sourceColor" in options.color && options.color.sourceColor) {
        const sourceColor = resolveHct(options.color.sourceColor);
        scheme = createDynamicColorScheme({
          brightness,
          variant: options.color.variant,
          sourceColor,
          contrastLevel: options.color.contrastLevel,
        });
      } else {
        scheme = createStaticColorScheme({ brightness });
      }

      const color: ResolveTokens<ColorTokens, string> = {
        highestSurface: hexFromArgb(scheme.highestSurface.toInt()),
        surface: hexFromArgb(scheme.surface.toInt()),
        surfaceDim: hexFromArgb(scheme.surfaceDim.toInt()),
        surfaceBright: hexFromArgb(scheme.surfaceBright.toInt()),
        surfaceContainerLowest: hexFromArgb(scheme.surfaceContainerLowest.toInt()),
        surfaceContainerLow: hexFromArgb(scheme.surfaceContainerLow.toInt()),
        surfaceContainer: hexFromArgb(scheme.surfaceContainer.toInt()),
        surfaceContainerHigh: hexFromArgb(scheme.surfaceContainerHigh.toInt()),
        surfaceContainerHighest: hexFromArgb(scheme.surfaceContainerHighest.toInt()),
        onSurface: hexFromArgb(scheme.onSurface.toInt()),
        surfaceVariant: hexFromArgb(scheme.surfaceVariant.toInt()),
        onSurfaceVariant: hexFromArgb(scheme.onSurfaceVariant.toInt()),
        inverseSurface: hexFromArgb(scheme.inverseSurface.toInt()),
        inverseOnSurface: hexFromArgb(scheme.inverseOnSurface.toInt()),
        outline: hexFromArgb(scheme.outline.toInt()),
        outlineVariant: hexFromArgb(scheme.outlineVariant.toInt()),
        shadow: hexFromArgb(scheme.shadow.toInt()),
        scrim: hexFromArgb(scheme.scrim.toInt()),
        surfaceTint: hexFromArgb(scheme.surfaceTint.toInt()),
        primary: hexFromArgb(scheme.primary.toInt()),
        onPrimary: hexFromArgb(scheme.onPrimary.toInt()),
        primaryContainer: hexFromArgb(scheme.primaryContainer.toInt()),
        onPrimaryContainer: hexFromArgb(scheme.onPrimaryContainer.toInt()),
        inversePrimary: hexFromArgb(scheme.inversePrimary.toInt()),
        secondary: hexFromArgb(scheme.secondary.toInt()),
        onSecondary: hexFromArgb(scheme.onSecondary.toInt()),
        secondaryContainer: hexFromArgb(scheme.secondaryContainer.toInt()),
        onSecondaryContainer: hexFromArgb(scheme.onSecondaryContainer.toInt()),
        tertiary: hexFromArgb(scheme.tertiary.toInt()),
        onTertiary: hexFromArgb(scheme.onTertiary.toInt()),
        tertiaryContainer: hexFromArgb(scheme.tertiaryContainer.toInt()),
        onTertiaryContainer: hexFromArgb(scheme.onTertiaryContainer.toInt()),
        error: hexFromArgb(scheme.error.toInt()),
        onError: hexFromArgb(scheme.onError.toInt()),
        errorContainer: hexFromArgb(scheme.errorContainer.toInt()),
        onErrorContainer: hexFromArgb(scheme.onErrorContainer.toInt()),
        primaryFixed: hexFromArgb(scheme.primaryFixed.toInt()),
        primaryFixedDim: hexFromArgb(scheme.primaryFixedDim.toInt()),
        onPrimaryFixed: hexFromArgb(scheme.onPrimaryFixed.toInt()),
        onPrimaryFixedVariant: hexFromArgb(scheme.onPrimaryFixedVariant.toInt()),
        secondaryFixed: hexFromArgb(scheme.secondaryFixed.toInt()),
        secondaryFixedDim: hexFromArgb(scheme.secondaryFixedDim.toInt()),
        onSecondaryFixed: hexFromArgb(scheme.onSecondaryFixed.toInt()),
        onSecondaryFixedVariant: hexFromArgb(scheme.onSecondaryFixedVariant.toInt()),
        tertiaryFixed: hexFromArgb(scheme.tertiaryFixed.toInt()),
        tertiaryFixedDim: hexFromArgb(scheme.tertiaryFixedDim.toInt()),
        onTertiaryFixed: hexFromArgb(scheme.onTertiaryFixed.toInt()),
        onTertiaryFixedVariant: hexFromArgb(scheme.onTertiaryFixedVariant.toInt()),
      };

      const defaults: ResolveTokens<ThemeTokens, string> = {
        color,
        shape: {
          corner: {
            ...SHAPE_DEFAULTS.corner,
            ...shape?.corner,
          }
        },
        motion: MOTION_DEFAULTS,
        typeface: typeface ? {
          plain: typeface.plain ?? TYPEFACE_DEFAULTS.plain,
          brand: typeface.brand ?? TYPEFACE_DEFAULTS.brand,
          weight: {
            regular: typeface.weight?.regular ?? TYPEFACE_DEFAULTS.weight.regular,
            medium: typeface.weight?.medium ?? TYPEFACE_DEFAULTS.weight.medium,
            bold: typeface.weight?.bold ?? TYPEFACE_DEFAULTS.weight.bold,
          },
        } : TYPEFACE_DEFAULTS,
        typescale: TYPESCALE_DEFAULTS,
        state: {
          ...STATE_DEFAULTS,
          ...state,
        },
        component: {
          ripple: RIPPLE_DEFAULTS,
          icon: ICON_DEFAULTS,
          materialSymbol: {
            ...MATERIAL_SYMBOL_DEFAULTS,
            font: options.component.materialSymbol.font,
          },
          radio: RADIO_DEFAULTS,
        },
      };
      return defaults;
    },
  } as const;
}
