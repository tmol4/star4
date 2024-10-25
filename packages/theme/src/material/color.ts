import { Hct, MaterialDynamicColors, SchemeContent, SchemeExpressive, SchemeFidelity, SchemeFruitSalad, SchemeMonochrome, SchemeNeutral, SchemeRainbow, SchemeTonalSpot, SchemeVibrant, type DynamicScheme } from "@material/material-color-utilities";

export type PaletteKeyColor =
  | "sourceColor"
  | "primaryPaletteKeyColor"
  | "secondaryPaletteKeyColor"
  | "tertiaryPaletteKeyColor"
  | "neutralPaletteKeyColor"
  | "neutralVariantPaletteKeyColor";

export type ColorRole =
  | "highestSurface" // surfaceDim if light, surfaceBright if dark
  | "surface"
  | "surfaceDim"
  | "surfaceBright"
  | "surfaceContainerLowest"
  | "surfaceContainerLow"
  | "surfaceContainer"
  | "surfaceContainerHigh"
  | "surfaceContainerHighest"
  | "onSurface"
  | "surfaceVariant"
  | "onSurfaceVariant"
  | "inverseSurface"
  | "inverseOnSurface"
  | "outline"
  | "outlineVariant"
  | "shadow"
  | "scrim"
  | "surfaceTint"
  | "primary"
  | "onPrimary"
  | "primaryContainer"
  | "onPrimaryContainer"
  | "inversePrimary"
  | "secondary"
  | "onSecondary"
  | "secondaryContainer"
  | "onSecondaryContainer"
  | "tertiary"
  | "onTertiary"
  | "tertiaryContainer"
  | "onTertiaryContainer"
  | "error"
  | "onError"
  | "errorContainer"
  | "onErrorContainer"
  | "primaryFixed"
  | "primaryFixedDim"
  | "onPrimaryFixed"
  | "onPrimaryFixedVariant"
  | "secondaryFixed"
  | "secondaryFixedDim"
  | "onSecondaryFixed"
  | "onSecondaryFixedVariant"
  | "tertiaryFixed"
  | "tertiaryFixedDim"
  | "onTertiaryFixed"
  | "onTertiaryFixedVariant";

export type ColorRoleMapping<T = string> = Readonly<Record<ColorRole, T>>;
export type PaletteKeyColorMapping<T> = Readonly<Record<PaletteKeyColor, T>>;

export type Brightness = "light" | "dark";


export interface ColorScheme extends ColorRoleMapping<Hct> {
  readonly brightness: Brightness;
}



export interface StaticColorScheme extends ColorScheme {}
export interface DynamicColorScheme extends ColorScheme, PaletteKeyColorMapping<Hct> {

}


const STATIC_COLOR_SCHEME_LIGHT_HCT: ColorRoleMapping<Hct> = {
  primary: Hct.fromInt(0xFF6750A4),
  onPrimary: Hct.fromInt(0xFFFFFFFF),
  primaryContainer: Hct.fromInt(0xFFEADDFF),
  onPrimaryContainer: Hct.fromInt(0xFF4F378B),
  primaryFixed: Hct.fromInt(0xFFEADDFF),
  onPrimaryFixed: Hct.fromInt(0xFF21005D),
  primaryFixedDim: Hct.fromInt(0xFFD0BCFF),
  onPrimaryFixedVariant: Hct.fromInt(0xFF4F378B),
  inversePrimary: Hct.fromInt(0xFFD0BCFF),

  secondary: Hct.fromInt(0xFF625B71),
  onSecondary: Hct.fromInt(0xFFFFFFFF),
  secondaryContainer: Hct.fromInt(0xFFE8DEF8),
  onSecondaryContainer: Hct.fromInt(0xFF4A4458),
  secondaryFixed: Hct.fromInt(0xFFE8DEF8),
  onSecondaryFixed: Hct.fromInt(0xFF1D192B),
  onSecondaryFixedVariant: Hct.fromInt(0xFF4A4458),
  secondaryFixedDim: Hct.fromInt(0xFFCCC2DC),

  tertiary: Hct.fromInt(0xFF7D5260),
  onTertiary: Hct.fromInt(0xFFFFFFFF),
  tertiaryContainer: Hct.fromInt(0xFFFFD8E4),
  onTertiaryContainer: Hct.fromInt(0xFF633B48),
  tertiaryFixed: Hct.fromInt(0xFFFFD8E4),
  onTertiaryFixed: Hct.fromInt(0xFF31111D),
  onTertiaryFixedVariant: Hct.fromInt(0xFF633B48),
  tertiaryFixedDim: Hct.fromInt(0xFFEFB8C8),

  error: Hct.fromInt(0xFFB3261E),
  onError: Hct.fromInt(0xFFFFFFFF),
  errorContainer: Hct.fromInt(0xFFF9DEDC),
  onErrorContainer: Hct.fromInt(0xFF8C1D18),

  surface: Hct.fromInt(0xFFFEF7FF),
  onSurface: Hct.fromInt(0xFF1D1B20),
  surfaceVariant: Hct.fromInt(0xFFE7E0EC),
  onSurfaceVariant: Hct.fromInt(0xFF49454F),
  surfaceContainerHighest: Hct.fromInt(0xFFE6E0E9),
  surfaceContainerHigh: Hct.fromInt(0xFFECE6F0),
  surfaceContainer: Hct.fromInt(0xFFF3EDF7),
  surfaceContainerLow: Hct.fromInt(0xFFF7F2FA),
  surfaceContainerLowest: Hct.fromInt(0xFFFFFFFF),
  inverseSurface: Hct.fromInt(0xFF322F35),
  inverseOnSurface: Hct.fromInt(0xFFF5EFF7),
  surfaceTint: Hct.fromInt(0xFF6750A4),
  surfaceBright: Hct.fromInt(0xFFFEF7FF),
  surfaceDim: Hct.fromInt(0xFFDED8E1),

  outline: Hct.fromInt(0xFF79747E),
  outlineVariant: Hct.fromInt(0xFFCAC4D0),

  scrim: Hct.fromInt(0xFF000000),
  shadow: Hct.fromInt(0xFF000000),

  highestSurface: Hct.fromInt(0xFFDED8E1) // surfaceDim
}
const STATIC_COLOR_SCHEME_DARK_HCT: ColorRoleMapping<Hct> = {
  primary: Hct.fromInt(0xFFD0BCFF),
  onPrimary: Hct.fromInt(0xFF381E72),
  primaryContainer: Hct.fromInt(0xFF4F378B),
  onPrimaryContainer: Hct.fromInt(0xFFEADDFF),
  primaryFixed: Hct.fromInt(0xFFEADDFF),
  onPrimaryFixed: Hct.fromInt(0xFF21005D),
  primaryFixedDim: Hct.fromInt(0xFFD0BCFF),
  onPrimaryFixedVariant: Hct.fromInt(0xFF4F378B),
  inversePrimary: Hct.fromInt(0xFFD0BCFF),

  secondary: Hct.fromInt(0xFFCCC2DC),
  onSecondary: Hct.fromInt(0xFF332D41),
  secondaryContainer: Hct.fromInt(0xFF4A4458),
  onSecondaryContainer: Hct.fromInt(0xFFE8DEF8),
  secondaryFixed: Hct.fromInt(0xFFE8DEF8),
  onSecondaryFixed: Hct.fromInt(0xFF1D192B),
  onSecondaryFixedVariant: Hct.fromInt(0xFF4A4458),
  secondaryFixedDim: Hct.fromInt(0xFFCCC2DC),

  tertiary: Hct.fromInt(0xFFEFB8C8),
  onTertiary: Hct.fromInt(0xFF492532),
  tertiaryContainer: Hct.fromInt(0xFF633B48),
  onTertiaryContainer: Hct.fromInt(0xFFFFD8E4),
  tertiaryFixed: Hct.fromInt(0xFFFFD8E4),
  onTertiaryFixed: Hct.fromInt(0xFF31111D),
  onTertiaryFixedVariant: Hct.fromInt(0xFF633B48),
  tertiaryFixedDim: Hct.fromInt(0xFFEFB8C8),

  error: Hct.fromInt(0xFFF2B8B5),
  onError: Hct.fromInt(0xFF601410),
  errorContainer: Hct.fromInt(0xFF8C1D18),
  onErrorContainer: Hct.fromInt(0xFFF9DEDC),

  surface: Hct.fromInt(0xFF141218),
  onSurface: Hct.fromInt(0xFFE6E0E9),
  surfaceVariant: Hct.fromInt(0xFF49454F),
  onSurfaceVariant: Hct.fromInt(0xFFCAC4D0),
  surfaceContainerHighest: Hct.fromInt(0xFF36343B),
  surfaceContainerHigh: Hct.fromInt(0xFF2B2930),
  surfaceContainer: Hct.fromInt(0xFF211F26),
  surfaceContainerLow: Hct.fromInt(0xFF1D1B20),
  surfaceContainerLowest: Hct.fromInt(0xFF0F0D13),
  inverseSurface: Hct.fromInt(0xFFE6E0E9),
  inverseOnSurface: Hct.fromInt(0xFF322F35),
  surfaceTint: Hct.fromInt(0xFFD0BCFF),
  surfaceBright: Hct.fromInt(0xFF3B383E),
  surfaceDim: Hct.fromInt(0xFF141218),

  outline: Hct.fromInt(0xFF938F99),
  outlineVariant: Hct.fromInt(0xFF49454F),

  scrim: Hct.fromInt(0xFF000000),
  shadow: Hct.fromInt(0xFF000000),

  highestSurface: Hct.fromInt(0xFF3B383E) // surfaceBright
}


export type StaticColorSchemeOptions = {
  brightness: Brightness;
}
export const createStaticColorScheme = (
  {
    brightness,
  }: StaticColorSchemeOptions,
): StaticColorScheme => {
  const scheme = brightness === "dark"
    ? STATIC_COLOR_SCHEME_DARK_HCT
    : STATIC_COLOR_SCHEME_LIGHT_HCT;
  return {
    brightness,
    ...scheme,
  };
}



export type DynamicColorSchemeVariant =
  | "monochrome"
  | "neutral"
  | "tonalSpot"
  | "vibrant"
  | "expressive"
  | "fidelity"
  | "content"
  | "rainbow"
  | "fruitSald";

type SchemeConstructor = new(sourceColorHct: Hct, isDark: boolean, contrastLevel: number) => DynamicScheme;

const SCHEMES: Record<DynamicColorSchemeVariant, SchemeConstructor> = {
  monochrome: SchemeMonochrome,
  neutral: SchemeNeutral,
  tonalSpot: SchemeTonalSpot,
  vibrant: SchemeVibrant,
  expressive: SchemeExpressive,
  fidelity: SchemeFidelity,
  content: SchemeContent,
  rainbow: SchemeRainbow,
  fruitSald: SchemeFruitSalad,
};

export type DynamicColorSchemeOptions = {
  brightness: Brightness;
  variant: DynamicColorSchemeVariant;
  sourceColor: Hct;
  contrastLevel?: number;
}
export const createDynamicColorScheme = (
  {
    brightness,
    sourceColor,
    variant,
    contrastLevel = 0,
  }: DynamicColorSchemeOptions,
): DynamicColorScheme => {
  const Scheme = SCHEMES[variant];
  const scheme = new Scheme(
    sourceColor,
    brightness === "dark",
    contrastLevel,
  );
  const highestSurface = MaterialDynamicColors.highestSurface(scheme);
  return {
    brightness,
    sourceColor,
    get highestSurface(): Hct {
      return highestSurface.getHct(scheme);
    },
    get primaryPaletteKeyColor(): Hct {
      return MaterialDynamicColors.primaryPaletteKeyColor.getHct(scheme);
    },
    get secondaryPaletteKeyColor(): Hct {
      return MaterialDynamicColors.secondaryPaletteKeyColor.getHct(scheme);
    },
    get tertiaryPaletteKeyColor(): Hct {
      return MaterialDynamicColors.tertiaryPaletteKeyColor.getHct(scheme);
    },
    get neutralPaletteKeyColor(): Hct {
      return MaterialDynamicColors.neutralPaletteKeyColor.getHct(scheme);
    },
    get neutralVariantPaletteKeyColor(): Hct {
      return MaterialDynamicColors.neutralVariantPaletteKeyColor.getHct(scheme);
    },
    get surface(): Hct {
      return MaterialDynamicColors.surface.getHct(scheme);
    },
    get surfaceDim(): Hct {
      return MaterialDynamicColors.surfaceDim.getHct(scheme);
    },
    get surfaceBright(): Hct {
      return MaterialDynamicColors.surfaceBright.getHct(scheme);
    },
    get surfaceContainerLowest(): Hct {
      return MaterialDynamicColors.surfaceContainerLowest.getHct(scheme);
    },
    get surfaceContainerLow(): Hct {
      return MaterialDynamicColors.surfaceContainerLow.getHct(scheme);
    },
    get surfaceContainer(): Hct {
      return MaterialDynamicColors.surfaceContainer.getHct(scheme);
    },
    get surfaceContainerHigh(): Hct {
      return MaterialDynamicColors.surfaceContainerHigh.getHct(scheme);
    },
    get surfaceContainerHighest(): Hct {
      return MaterialDynamicColors.surfaceContainerHighest.getHct(scheme);
    },
    get onSurface(): Hct {
      return MaterialDynamicColors.onSurface.getHct(scheme);
    },
    get surfaceVariant(): Hct {
      return MaterialDynamicColors.surfaceVariant.getHct(scheme);
    },
    get onSurfaceVariant(): Hct {
      return MaterialDynamicColors.onSurfaceVariant.getHct(scheme);
    },
    get inverseSurface(): Hct {
      return MaterialDynamicColors.inverseSurface.getHct(scheme);
    },
    get inverseOnSurface(): Hct {
      return MaterialDynamicColors.inverseOnSurface.getHct(scheme);
    },
    get outline(): Hct {
      return MaterialDynamicColors.outline.getHct(scheme);
    },
    get outlineVariant(): Hct {
      return MaterialDynamicColors.outlineVariant.getHct(scheme);
    },
    get shadow(): Hct {
      return MaterialDynamicColors.shadow.getHct(scheme);
    },
    get scrim(): Hct {
      return MaterialDynamicColors.scrim.getHct(scheme);
    },
    get surfaceTint(): Hct {
      return MaterialDynamicColors.surfaceTint.getHct(scheme);
    },
    get primary(): Hct {
      return MaterialDynamicColors.primary.getHct(scheme);
    },
    get onPrimary(): Hct {
      return MaterialDynamicColors.onPrimary.getHct(scheme);
    },
    get primaryContainer(): Hct {
      return MaterialDynamicColors.primaryContainer.getHct(scheme);
    },
    get onPrimaryContainer(): Hct {
      return MaterialDynamicColors.onPrimaryContainer.getHct(scheme);
    },
    get inversePrimary(): Hct {
      return MaterialDynamicColors.inversePrimary.getHct(scheme);
    },
    get secondary(): Hct {
      return MaterialDynamicColors.secondary.getHct(scheme);
    },
    get onSecondary(): Hct {
      return MaterialDynamicColors.onSecondary.getHct(scheme);
    },
    get secondaryContainer(): Hct {
      return MaterialDynamicColors.secondaryContainer.getHct(scheme);
    },
    get onSecondaryContainer(): Hct {
      return MaterialDynamicColors.onSecondaryContainer.getHct(scheme);
    },
    get tertiary(): Hct {
      return MaterialDynamicColors.tertiary.getHct(scheme);
    },
    get onTertiary(): Hct {
      return MaterialDynamicColors.onTertiary.getHct(scheme);
    },
    get tertiaryContainer(): Hct {
      return MaterialDynamicColors.tertiaryContainer.getHct(scheme);
    },
    get onTertiaryContainer(): Hct {
      return MaterialDynamicColors.onTertiaryContainer.getHct(scheme);
    },
    get error(): Hct {
      return MaterialDynamicColors.error.getHct(scheme);
    },
    get onError(): Hct {
      return MaterialDynamicColors.onError.getHct(scheme);
    },
    get errorContainer(): Hct {
      return MaterialDynamicColors.errorContainer.getHct(scheme);
    },
    get onErrorContainer(): Hct {
      return MaterialDynamicColors.onErrorContainer.getHct(scheme);
    },
    get primaryFixed(): Hct {
      return MaterialDynamicColors.primaryFixed.getHct(scheme);
    },
    get primaryFixedDim(): Hct {
      return MaterialDynamicColors.primaryFixedDim.getHct(scheme);
    },
    get onPrimaryFixed(): Hct {
      return MaterialDynamicColors.onPrimaryFixed.getHct(scheme);
    },
    get onPrimaryFixedVariant(): Hct {
      return MaterialDynamicColors.onPrimaryFixedVariant.getHct(scheme);
    },
    get secondaryFixed(): Hct {
      return MaterialDynamicColors.secondaryFixed.getHct(scheme);
    },
    get secondaryFixedDim(): Hct {
      return MaterialDynamicColors.secondaryFixedDim.getHct(scheme);
    },
    get onSecondaryFixed(): Hct {
      return MaterialDynamicColors.onSecondaryFixed.getHct(scheme);
    },
    get onSecondaryFixedVariant(): Hct {
      return MaterialDynamicColors.onSecondaryFixedVariant.getHct(scheme);
    },
    get tertiaryFixed(): Hct {
      return MaterialDynamicColors.tertiaryFixed.getHct(scheme);
    },
    get tertiaryFixedDim(): Hct {
      return MaterialDynamicColors.tertiaryFixedDim.getHct(scheme);
    },
    get onTertiaryFixed(): Hct {
      return MaterialDynamicColors.onTertiaryFixed.getHct(scheme);
    },
    get onTertiaryFixedVariant(): Hct {
      return MaterialDynamicColors.onTertiaryFixedVariant.getHct(scheme);
    },
  };
}



