import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const media = window.matchMedia(query);
  const [match, setMatch] = useState<Boolean>(media.matches);

  useEffect(() => {
    const listener = () => {
      setMatch(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [media]);

  return match;
};
