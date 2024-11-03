import { useEffect, useLayoutEffect } from "react";
import { IS_SERVER } from "./is-server";

export const useIsomorphicLayoutEffect =
  IS_SERVER ? useEffect : useLayoutEffect;
