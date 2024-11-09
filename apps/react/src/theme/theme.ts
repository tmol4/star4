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
  color: {
    variant: "tonalSpot",
    sourceColor: "#0000ff",
  },
  typeface: {
    plain: fontFamily(fontSource("Roboto Flex"), fontSource("Open Sans"), "Roboto",  "system-ui", "Arial", "sans-serif"),
    brand: fontFamily(fontSource("Raleway"), fontSource("Manrope"), "sans-serif"),
  },
  component: {
    materialSymbol: {
      font: fontFamily("Material Symbols Outlined Variable"),
    },
  }
});
