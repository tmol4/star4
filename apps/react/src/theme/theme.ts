import { createTheme } from "@star4/vanilla-extract";


type FontFamily = (string | FontFamily)[];

const fontFamily = (...args: FontFamily): string => {
  return args
    .map(
      value => typeof value === "string"
        ? value.includes(" ")
          ? `"${value}"`
          : value
        : fontFamily(...value),
    )
    .join(", ");
}

const fontSource = (family: string) => [`${family}`, `${family} Variable`];

export const { contract, theme } = createTheme({
  // color: {},
  color: {
    variant: "tonalSpot",
    sourceColor: "#00ff00",
  },
  typeface: {
    plain: fontFamily(fontSource("Open Sans"), fontSource("Roboto Flex"), "Roboto",  "system-ui", "Arial", "sans-serif"),
    brand: fontFamily(fontSource("Manrope"), fontSource("Raleway"),  "sans-serif"),
  },
  component: {
    materialSymbol: {
      font: fontFamily("Material Symbols Outlined Variable"),
    },
  }
});
