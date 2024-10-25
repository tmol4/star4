import { createDynamicColorScheme, createStaticColorScheme, hexFromArgb, type Brightness, type DynamicColorScheme, type DynamicColorSchemeVariant, type StaticColorScheme } from "@star4/theme/material";
import { SHAPE_DEFAULTS, THEME, type ColorTokens, type ThemeTokens } from "./tokens";
import { resolveHct, type MaybeHct, type ResolveTokens } from "./utils";
import { TYPEFACE_DEFAULTS } from "./tokens/typeface.css";
import { TYPESCALE_DEFAULTS } from "./tokens/typescale.css";
import { MOTION_DEFAULTS } from "./tokens/motion.css";

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
}

export const createTheme = (options: CreateThemeOptions) => {
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
        shape: SHAPE_DEFAULTS,
        motion: MOTION_DEFAULTS,
        typeface: TYPEFACE_DEFAULTS,
        typescale: TYPESCALE_DEFAULTS,
      };
      return defaults;
    },
  } as const;
}
