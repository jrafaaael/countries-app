import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

export const useChangeTheme = () => {
  const localUserThemeIsDark = useMediaQuery("(prefers-color-scheme: dark)");
  const establishedThemeIsDark = JSON.parse(
    localStorage.getItem("isDarkMode")!
  );

  const [isDarkMode, setIsDarkMode] = useState<Boolean>(
    establishedThemeIsDark ?? localUserThemeIsDark
  );
  const mountRef = useRef(false);

  const handleChangeTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (mountRef.current) {
      setIsDarkMode(localUserThemeIsDark);
    }
  }, [localUserThemeIsDark]);

  useEffect(() => {
    isDarkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");

    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    mountRef.current = true;
  }, []);

  return {
    isDarkMode,
    handleChangeTheme,
  };
};
