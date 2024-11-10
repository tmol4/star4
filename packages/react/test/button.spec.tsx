import { test, expect } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from "../src";

import { page } from "@vitest/browser/context";

test(
  "Elevated",
  async () => {
    const { getByText } = render(<Button variant="elevated" label="Elevated" />);

    await expect.element(getByText("Elevated")).toBeInTheDocument();
  },
);
test(
  "Filled",
  async () => {
    const { getByText } = render(<Button variant="filled" label="Filled" />);

    await expect.element(getByText("Filled")).toBeInTheDocument();
  },
);
test(
  "Filled tonal",
  async () => {
    const { getByText } = render(<Button variant="filledTonal" label="Filled tonal" />);

    await expect.element(getByText("Filled tonal")).toBeInTheDocument();
  },
);
test(
  "Filled tonal",
  async () => {
    const screen = render(<Button variant="filledTonal" label="Filled tonal" />);

    await expect.element(screen.getByText("Filled tonal")).toBeInTheDocument();
  },
);
