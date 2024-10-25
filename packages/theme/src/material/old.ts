// export type DynamicSchemeOptions = {
//   variant: SchemeVariant;
//   brightness: Brightness;
//   sourceColor: Hct;
//   contrastLevel: number;
// }

// export abstract class ColorScheme implements ColorRoleMapping<Hct> {
//   public abstract highestSurface: Hct;
//   public abstract surface: Hct;
//   public abstract surfaceDim: Hct;
//   public abstract surfaceBright: Hct;
//   public abstract surfaceContainerLowest: Hct;
//   public abstract surfaceContainerLow: Hct;
//   public abstract surfaceContainer: Hct;
//   public abstract surfaceContainerHigh: Hct;
//   public abstract surfaceContainerHighest: Hct;
//   public abstract onSurface: Hct;
//   public abstract surfaceVariant: Hct;
//   public abstract onSurfaceVariant: Hct;
//   public abstract inverseSurface: Hct;
//   public abstract inverseOnSurface: Hct;
//   public abstract outline: Hct;
//   public abstract outlineVariant: Hct;
//   public abstract shadow: Hct;
//   public abstract scrim: Hct;
//   public abstract surfaceTint: Hct;
//   public abstract primary: Hct;
//   public abstract onPrimary: Hct;
//   public abstract primaryContainer: Hct;
//   public abstract onPrimaryContainer: Hct;
//   public abstract inversePrimary: Hct;
//   public abstract secondary: Hct;
//   public abstract onSecondary: Hct;
//   public abstract secondaryContainer: Hct;
//   public abstract onSecondaryContainer: Hct;
//   public abstract tertiary: Hct;
//   public abstract onTertiary: Hct;
//   public abstract tertiaryContainer: Hct;
//   public abstract onTertiaryContainer: Hct;
//   public abstract error: Hct;
//   public abstract onError: Hct;
//   public abstract errorContainer: Hct;
//   public abstract onErrorContainer: Hct;
//   public abstract primaryFixed: Hct;
//   public abstract primaryFixedDim: Hct;
//   public abstract onPrimaryFixed: Hct;
//   public abstract onPrimaryFixedVariant: Hct;
//   public abstract secondaryFixed: Hct;
//   public abstract secondaryFixedDim: Hct;
//   public abstract onSecondaryFixed: Hct;
//   public abstract onSecondaryFixedVariant: Hct;
//   public abstract tertiaryFixed: Hct;
//   public abstract tertiaryFixedDim: Hct;
//   public abstract onTertiaryFixed: Hct;
//   public abstract onTertiaryFixedVariant: Hct;
//   public abstract brightness: Brightness;

//   static static(
//     brightness: Brightness,
//     overrides: {} = {},
//   ): ColorScheme {
//     return new _StaticColorScheme(brightness, overrides);
//   }
//   static dynamic(options: DynamicSchemeOptions): ColorScheme {
//     const scheme = createDynamicScheme(
//       options.variant,
//       options.sourceColor,
//       options.brightness,
//       options.contrastLevel,
//     );
//     return new _DynamicColorScheme(scheme);
//   }
// }

// export class ColorSchemePair {
//   static static() {}
//   static dynamic() {}
// }

// class _StaticColorScheme extends ColorScheme {
//   constructor(
//     public override readonly brightness: Brightness,
//     overrides: {},
//   ) {
//     super();
//     const scheme = createStaticScheme(brightness);
//     this.highestSurface = scheme.highestSurface;
//     this.surface = scheme.surface;
//     this.surfaceDim = scheme.surfaceDim;
//     this.surfaceBright = scheme.surfaceBright;
//     this.surfaceContainerLowest = scheme.surfaceContainerLowest;
//     this.surfaceContainerLow = scheme.surfaceContainerLow;
//     this.surfaceContainer = scheme.surfaceContainer;
//     this.surfaceContainerHigh = scheme.surfaceContainerHigh;
//     this.surfaceContainerHighest = scheme.surfaceContainerHighest;
//     this.onSurface = scheme.onSurface;
//     this.surfaceVariant = scheme.surfaceVariant;
//     this.onSurfaceVariant = scheme.onSurfaceVariant;
//     this.inverseSurface = scheme.inverseSurface;
//     this.inverseOnSurface = scheme.inverseOnSurface;
//     this.outline = scheme.outline;
//     this.outlineVariant = scheme.outlineVariant;
//     this.shadow = scheme.shadow;
//     this.scrim = scheme.scrim;
//     this.surfaceTint = scheme.surfaceTint;
//     this.primary = scheme.primary;
//     this.onPrimary = scheme.onPrimary;
//     this.primaryContainer = scheme.primaryContainer;
//     this.onPrimaryContainer = scheme.onPrimaryContainer;
//     this.inversePrimary = scheme.inversePrimary;
//     this.secondary = scheme.secondary;
//     this.onSecondary = scheme.onSecondary;
//     this.secondaryContainer = scheme.secondaryContainer;
//     this.onSecondaryContainer = scheme.onSecondaryContainer;
//     this.tertiary = scheme.tertiary;
//     this.onTertiary = scheme.onTertiary;
//     this.tertiaryContainer = scheme.tertiaryContainer;
//     this.onTertiaryContainer = scheme.onTertiaryContainer;
//     this.error = scheme.error;
//     this.onError = scheme.onError;
//     this.errorContainer = scheme.errorContainer;
//     this.onErrorContainer = scheme.onErrorContainer;
//     this.primaryFixed = scheme.primaryFixed;
//     this.primaryFixedDim = scheme.primaryFixedDim;
//     this.onPrimaryFixed = scheme.onPrimaryFixed;
//     this.onPrimaryFixedVariant = scheme.onPrimaryFixedVariant;
//     this.secondaryFixed = scheme.secondaryFixed;
//     this.secondaryFixedDim = scheme.secondaryFixedDim;
//     this.onSecondaryFixed = scheme.onSecondaryFixed;
//     this.onSecondaryFixedVariant = scheme.onSecondaryFixedVariant;
//     this.tertiaryFixed = scheme.tertiaryFixed;
//     this.tertiaryFixedDim = scheme.tertiaryFixedDim;
//     this.onTertiaryFixed = scheme.onTertiaryFixed;
//     this.onTertiaryFixedVariant = scheme.onTertiaryFixedVariant;
//   }

//   public override highestSurface: Hct;
//   public override surface: Hct;
//   public override surfaceDim: Hct;
//   public override surfaceBright: Hct;
//   public override surfaceContainerLowest: Hct;
//   public override surfaceContainerLow: Hct;
//   public override surfaceContainer: Hct;
//   public override surfaceContainerHigh: Hct;
//   public override surfaceContainerHighest: Hct;
//   public override onSurface: Hct;
//   public override surfaceVariant: Hct;
//   public override onSurfaceVariant: Hct;
//   public override inverseSurface: Hct;
//   public override inverseOnSurface: Hct;
//   public override outline: Hct;
//   public override outlineVariant: Hct;
//   public override shadow: Hct;
//   public override scrim: Hct;
//   public override surfaceTint: Hct;
//   public override primary: Hct;
//   public override onPrimary: Hct;
//   public override primaryContainer: Hct;
//   public override onPrimaryContainer: Hct;
//   public override inversePrimary: Hct;
//   public override secondary: Hct;
//   public override onSecondary: Hct;
//   public override secondaryContainer: Hct;
//   public override onSecondaryContainer: Hct;
//   public override tertiary: Hct;
//   public override onTertiary: Hct;
//   public override tertiaryContainer: Hct;
//   public override onTertiaryContainer: Hct;
//   public override error: Hct;
//   public override onError: Hct;
//   public override errorContainer: Hct;
//   public override onErrorContainer: Hct;
//   public override primaryFixed: Hct;
//   public override primaryFixedDim: Hct;
//   public override onPrimaryFixed: Hct;
//   public override onPrimaryFixedVariant: Hct;
//   public override secondaryFixed: Hct;
//   public override secondaryFixedDim: Hct;
//   public override onSecondaryFixed: Hct;
//   public override onSecondaryFixedVariant: Hct;
//   public override tertiaryFixed: Hct;
//   public override tertiaryFixedDim: Hct;
//   public override onTertiaryFixed: Hct;
//   public override onTertiaryFixedVariant: Hct;
// }

// class _DynamicColorScheme extends ColorScheme {
//   public override readonly brightness: Brightness;

//   constructor(
//     private readonly scheme: DynamicScheme,
//   ) {
//     super();
//     this.brightness = this.scheme.isDark ? "dark" : "light";
//   }

//   public override get highestSurface(): Hct {
//     return MaterialDynamicColors.highestSurface(this.scheme).getHct(this.scheme);
//   }
//   public override get surface(): Hct {
//     return MaterialDynamicColors.surface.getHct(this.scheme);
//   }
//   public override get surfaceDim(): Hct {
//     return MaterialDynamicColors.surfaceDim.getHct(this.scheme);
//   }
//   public override get surfaceBright(): Hct {
//     return MaterialDynamicColors.surfaceBright.getHct(this.scheme);
//   }
//   public override get surfaceContainerLowest(): Hct {
//     return MaterialDynamicColors.surfaceContainerLowest.getHct(this.scheme);
//   }
//   public override get surfaceContainerLow(): Hct {
//     return MaterialDynamicColors.surfaceContainerLow.getHct(this.scheme);
//   }
//   public override get surfaceContainer(): Hct {
//     return MaterialDynamicColors.surfaceContainer.getHct(this.scheme);
//   }
//   public override get surfaceContainerHigh(): Hct {
//     return MaterialDynamicColors.surfaceContainerHigh.getHct(this.scheme);
//   }
//   public override get surfaceContainerHighest(): Hct {
//     return MaterialDynamicColors.surfaceContainerHighest.getHct(this.scheme);
//   }
//   public override get onSurface(): Hct {
//     return MaterialDynamicColors.onSurface.getHct(this.scheme);
//   }
//   public override get surfaceVariant(): Hct {
//     return MaterialDynamicColors.surfaceVariant.getHct(this.scheme);
//   }
//   public override get onSurfaceVariant(): Hct {
//     return MaterialDynamicColors.onSurfaceVariant.getHct(this.scheme);
//   }
//   public override get inverseSurface(): Hct {
//     return MaterialDynamicColors.inverseSurface.getHct(this.scheme);
//   }
//   public override get inverseOnSurface(): Hct {
//     return MaterialDynamicColors.inverseOnSurface.getHct(this.scheme);
//   }
//   public override get outline(): Hct {
//     return MaterialDynamicColors.outline.getHct(this.scheme);
//   }
//   public override get outlineVariant(): Hct {
//     return MaterialDynamicColors.outlineVariant.getHct(this.scheme);
//   }
//   public override get shadow(): Hct {
//     return MaterialDynamicColors.shadow.getHct(this.scheme);
//   }
//   public override get scrim(): Hct {
//     return MaterialDynamicColors.scrim.getHct(this.scheme);
//   }
//   public override get surfaceTint(): Hct {
//     return MaterialDynamicColors.surfaceTint.getHct(this.scheme);
//   }
//   public override get primary(): Hct {
//     return MaterialDynamicColors.primary.getHct(this.scheme);
//   }
//   public override get onPrimary(): Hct {
//     return MaterialDynamicColors.onPrimary.getHct(this.scheme);
//   }
//   public override get primaryContainer(): Hct {
//     return MaterialDynamicColors.primaryContainer.getHct(this.scheme);
//   }
//   public override get onPrimaryContainer(): Hct {
//     return MaterialDynamicColors.onPrimaryContainer.getHct(this.scheme);
//   }
//   public override get inversePrimary(): Hct {
//     return MaterialDynamicColors.inversePrimary.getHct(this.scheme);
//   }
//   public override get secondary(): Hct {
//     return MaterialDynamicColors.secondary.getHct(this.scheme);
//   }
//   public override get onSecondary(): Hct {
//     return MaterialDynamicColors.onSecondary.getHct(this.scheme);
//   }
//   public override get secondaryContainer(): Hct {
//     return MaterialDynamicColors.secondaryContainer.getHct(this.scheme);
//   }
//   public override get onSecondaryContainer(): Hct {
//     return MaterialDynamicColors.onSecondaryContainer.getHct(this.scheme);
//   }
//   public override get tertiary(): Hct {
//     return MaterialDynamicColors.tertiary.getHct(this.scheme);
//   }
//   public override get onTertiary(): Hct {
//     return MaterialDynamicColors.onTertiary.getHct(this.scheme);
//   }
//   public override get tertiaryContainer(): Hct {
//     return MaterialDynamicColors.tertiaryContainer.getHct(this.scheme);
//   }
//   public override get onTertiaryContainer(): Hct {
//     return MaterialDynamicColors.onTertiaryContainer.getHct(this.scheme);
//   }
//   public override get error(): Hct {
//     return MaterialDynamicColors.error.getHct(this.scheme);
//   }
//   public override get onError(): Hct {
//     return MaterialDynamicColors.onError.getHct(this.scheme);
//   }
//   public override get errorContainer(): Hct {
//     return MaterialDynamicColors.errorContainer.getHct(this.scheme);
//   }
//   public override get onErrorContainer(): Hct {
//     return MaterialDynamicColors.onErrorContainer.getHct(this.scheme);
//   }
//   public override get primaryFixed(): Hct {
//     return MaterialDynamicColors.primaryFixed.getHct(this.scheme);
//   }
//   public override get primaryFixedDim(): Hct {
//     return MaterialDynamicColors.primaryFixedDim.getHct(this.scheme);
//   }
//   public override get onPrimaryFixed(): Hct {
//     return MaterialDynamicColors.onPrimaryFixed.getHct(this.scheme);
//   }
//   public override get onPrimaryFixedVariant(): Hct {
//     return MaterialDynamicColors.onPrimaryFixedVariant.getHct(this.scheme);
//   }
//   public override get secondaryFixed(): Hct {
//     return MaterialDynamicColors.secondaryFixed.getHct(this.scheme);
//   }
//   public override get secondaryFixedDim(): Hct {
//     return MaterialDynamicColors.secondaryFixedDim.getHct(this.scheme);
//   }
//   public override get onSecondaryFixed(): Hct {
//     return MaterialDynamicColors.onSecondaryFixed.getHct(this.scheme);
//   }
//   public override get onSecondaryFixedVariant(): Hct {
//     return MaterialDynamicColors.onSecondaryFixedVariant.getHct(this.scheme);
//   }
//   public override get tertiaryFixed(): Hct {
//     return MaterialDynamicColors.tertiaryFixed.getHct(this.scheme);
//   }
//   public override get tertiaryFixedDim(): Hct {
//     return MaterialDynamicColors.tertiaryFixedDim.getHct(this.scheme);
//   }
//   public override get onTertiaryFixed(): Hct {
//     return MaterialDynamicColors.onTertiaryFixed.getHct(this.scheme);
//   }
//   public override get onTertiaryFixedVariant(): Hct {
//     return MaterialDynamicColors.onTertiaryFixedVariant.getHct(this.scheme);
//   }
// }

// const SCHEMES: Record<SchemeVariant, SchemeConstructor> = {
//   monochrome: SchemeMonochrome,
//   neutral: SchemeNeutral,
//   tonalSpot: SchemeTonalSpot,
//   vibrant: SchemeVibrant,
//   expressive: SchemeExpressive,
//   fidelity: SchemeFidelity,
//   content: SchemeContent,
//   rainbow: SchemeRainbow,
//   fruitSald: SchemeFruitSalad,
// };

// type SchemeVariant =
//   | "monochrome"
//   | "neutral"
//   | "tonalSpot"
//   | "vibrant"
//   | "expressive"
//   | "fidelity"
//   | "content"
//   | "rainbow"
//   | "fruitSald";

// interface SchemeConstructor {
//   new(sourceColorHct: Hct, isDark: boolean, contrastLevel: number): DynamicScheme;
// }



// const createDynamicScheme = (
//   variant: SchemeVariant,
//   sourceColor: Hct,
//   brightness: Brightness,
//   contrastLevel: number,
// ) => {
//   return new SCHEMES[variant](sourceColor, brightness === "dark", contrastLevel);
// }
