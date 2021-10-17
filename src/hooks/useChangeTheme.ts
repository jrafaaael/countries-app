import { useEffect, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

export const useChangeTheme = () => {
  const userThemeIsDark = useMediaQuery("(prefers-color-scheme: dark)");

  const [isDarkMode, setIsDarkMode] = useState(userThemeIsDark);

  const handleChangeTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    setIsDarkMode(userThemeIsDark)
  }, [userThemeIsDark]);

  useEffect(() => {
    isDarkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDarkMode]);

  return {
    isDarkMode,
    handleChangeTheme,
  };
};
