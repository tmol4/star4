import { useEffect, useState } from "react";
import { IS_SERVER } from ".";

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


export function usePrefersDark(serverFallback?: boolean) {
  return useMediaQuery("(prefers-color-scheme: dark)", serverFallback);
}
