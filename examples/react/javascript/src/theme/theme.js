import { createTheme } from "@star4/vanilla-extract";

const fontFamily = (...args) => {
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

const fontSource = (family) => [`${family}`, `${family} Variable`];

export const { contract, theme } = createTheme({
  color: {},
  // color: {
  //   variant: "expressive",
  //   sourceColor: "#0000ff",
  // },
  typeface: {
    plain: fontFamily(fontSource("Roboto Flex"), fontSource("Open Sans"), "Roboto",  "system-ui", "Arial", "sans-serif"),
    brand: fontFamily(fontSource("Raleway"), fontSource("Manrope"), "sans-serif"),
  },
  component: {
    materialSymbol: {
      font: fontFamily("Material Symbols Rounded Variable"),
    },
  }
});
