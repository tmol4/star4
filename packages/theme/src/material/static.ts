import { Hct } from "@material/material-color-utilities"
import type { ColorRoleMapping, Brightness } from "./color"

const STATIC_COLOR_SCHEME_LIGHT_HEX: ColorRoleMapping<`#${string}`> = {
  primary: "#6750A4",
  onPrimary: "#FFFFFF",
  primaryContainer: "#EADDFF",
  onPrimaryContainer: "#4F378B",
  primaryFixed: "#EADDFF",
  onPrimaryFixed: "#21005D",
  primaryFixedDim: "#D0BCFF",
  onPrimaryFixedVariant: "#4F378B",
  inversePrimary: "#D0BCFF",

  secondary: "#625B71",
  onSecondary: "#FFFFFF",
  secondaryContainer: "#E8DEF8",
  onSecondaryContainer: "#4A4458",
  secondaryFixed: "#E8DEF8",
  onSecondaryFixed: "#1D192B",
  onSecondaryFixedVariant: "#4A4458",
  secondaryFixedDim: "#CCC2DC",

  tertiary: "#7D5260",
  onTertiary: "#FFFFFF",
  tertiaryContainer: "#FFD8E4",
  onTertiaryContainer: "#633B48",
  tertiaryFixed: "#FFD8E4",
  onTertiaryFixed: "#31111D",
  onTertiaryFixedVariant: "#633B48",
  tertiaryFixedDim: "#EFB8C8",

  error: "#B3261E",
  onError: "#FFFFFF",
  errorContainer: "#F9DEDC",
  onErrorContainer: "#8C1D18",

  surface: "#FEF7FF",
  onSurface: "#1D1B20",
  surfaceVariant: "#E7E0EC",
  onSurfaceVariant: "#49454F",
  surfaceContainerHighest: "#E6E0E9",
  surfaceContainerHigh: "#ECE6F0",
  surfaceContainer: "#F3EDF7",
  surfaceContainerLow: "#F7F2FA",
  surfaceContainerLowest: "#FFFFFF",
  inverseSurface: "#322F35",
  inverseOnSurface: "#F5EFF7",
  surfaceTint: "#6750A4",
  surfaceBright: "#FEF7FF",
  surfaceDim: "#DED8E1",

  outline: "#79747E",
  outlineVariant: "#CAC4D0",

  scrim: "#000000",
  shadow: "#000000",

  highestSurface: "#DED8E1", // surfaceDim
}
const STATIC_COLOR_SCHEME_DARK_HEX: ColorRoleMapping<`#${string}`> = {
  primary: "#D0BCFF",
  onPrimary: "#381E72",
  primaryContainer: "#4F378B",
  onPrimaryContainer: "#EADDFF",
  primaryFixed: "#EADDFF",
  onPrimaryFixed: "#21005D",
  primaryFixedDim: "#D0BCFF",
  onPrimaryFixedVariant: "#4F378B",
  inversePrimary: "#D0BCFF",

  secondary: "#CCC2DC",
  onSecondary: "#332D41",
  secondaryContainer: "#4A4458",
  onSecondaryContainer: "#E8DEF8",
  secondaryFixed: "#E8DEF8",
  onSecondaryFixed: "#1D192B",
  onSecondaryFixedVariant: "#4A4458",
  secondaryFixedDim: "#CCC2DC",

  tertiary: "#EFB8C8",
  onTertiary: "#492532",
  tertiaryContainer: "#633B48",
  onTertiaryContainer: "#FFD8E4",
  tertiaryFixed: "#FFD8E4",
  onTertiaryFixed: "#31111D",
  onTertiaryFixedVariant: "#633B48",
  tertiaryFixedDim: "#EFB8C8",

  error: "#F2B8B5",
  onError: "#601410",
  errorContainer: "#8C1D18",
  onErrorContainer: "#F9DEDC",

  surface: "#141218",
  onSurface: "#E6E0E9",
  surfaceVariant: "#49454F",
  onSurfaceVariant: "#CAC4D0",
  surfaceContainerHighest: "#36343B",
  surfaceContainerHigh: "#2B2930",
  surfaceContainer: "#211F26",
  surfaceContainerLow: "#1D1B20",
  surfaceContainerLowest: "#0F0D13",
  inverseSurface: "#E6E0E9",
  inverseOnSurface: "#322F35",
  surfaceTint: "#D0BCFF",
  surfaceBright: "#3B383E",
  surfaceDim: "#141218",

  outline: "#938F99",
  outlineVariant: "#49454F",

  scrim: "#000000",
  shadow: "#000000",

  highestSurface: "#3B383E", // surfaceBright
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



export const createStaticScheme = (
  brightness: Brightness,
): ColorRoleMapping<Hct> => {
  return brightness === "dark"
    ? STATIC_COLOR_SCHEME_DARK_HCT
    : STATIC_COLOR_SCHEME_LIGHT_HCT;
}
