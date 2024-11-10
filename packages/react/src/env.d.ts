/// <reference types="@vitest/browser/providers/playwright" />

declare module "react" {
  interface HTMLAttributes<T> {
    popover?: boolean | "manual" | "auto" | undefined;
  }
}

export {};
