import { createContext } from "react";
import { CountriesState, Filters } from "../../types/Country";

interface CountriesContextProps {
  countries: CountriesState;
  changeFilter: (by: keyof Filters, value: string) => void;
}

export const CountriesContext = createContext<CountriesContextProps>(
  {} as CountriesContextProps
);
