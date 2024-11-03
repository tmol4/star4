import { useEffect, useState } from "react";
import { IS_SERVER } from "./is-server";

export const useMediaQuery = (query: string, serverFallback = false): boolean => {
  if (IS_SERVER) {
    return serverFallback;
  }

  const initialValue = window.matchMedia(query).matches;
  const [matches, setMatches] = useState(initialValue);

  useEffect(
    () => {
      const media = window.matchMedia(query);
      const update = () => setMatches(media.matches);
      media.addEventListener("change", update);
      return media.removeEventListener.bind(media, "change", update)
    },
    [query],
  );

  return matches;
}

type MediaFeatures = {
  "any-hover": "none" | "hover";
  "any-pointer": "none" | "coarse" | "fine";
  "aspect-ratio": "";
  "color": "";
  "color-gamut": "";
  "color-index": "";
  "device-aspect-ratio Deprecated": "";
  "device-height Deprecated": "";
  "device-width Deprecated": "";
  "display-mode": "";
  "dynamic-range": "";
  "forced-colors": "none" | "active";
  "grid": "";
  "height": "";
  "hover": "none" | "hover";
  "inverted-colors": "none" | "inverted";
  "monochrome": "";
  "orientation": "portrait" | "landscape";
  "overflow-block": "";
  "overflow-inline": "";
  "pointer": "";
  "prefers-color-scheme": "";
  "prefers-contrast": "";
  "prefers-reduced-motion": "";
  "prefers-reduced-transparency": "";
  "resolution": "";
  "scripting": "";
  "update": "";
  "video-dynamic-range": "";
  "width": "";
}


// export const usePrefersDark = (serverFallback?: boolean) => {
//   return useMediaQuery("(prefers-color-scheme: dark)", serverFallback);
// }
