import { useContext } from "react";
import { CountriesContext } from "./CountriesContext";

export const useCountriesContext = () => {
  const context = useContext(CountriesContext);

  return {
    ...context,
  };
};
