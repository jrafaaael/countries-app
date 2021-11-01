import { useEffect, useReducer } from "react";

import { getCountries } from "../../api/Country/getCountries";
import { COUNTRIES_INITIAL_STATE } from "../../helpers/constants/COUNTRIES_INITIAL_STATE";

import { Filters } from "../../types/Country";

import { CountriesContext } from "./CountriesContext";
import { countriesReducer } from "./countriesReducer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const CountriesProvider = ({ children }: Props) => {
  const [countries, dispatch] = useReducer(
    countriesReducer,
    COUNTRIES_INITIAL_STATE
  );

  useEffect(() => {
    dispatch({ type: "FETCHING" });
    getCountries()
      .then((data) => {
        dispatch({
          type: "FETCHED",
          payload: {
            countries: data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH ERROR",
          payload: {
            error,
          },
        });
      });
  }, []);

  const changeFilter = (by: keyof Filters, value: string) =>
    dispatch({
      type: "CHANGE FILTER",
      payload: {
        by,
        value,
      },
    });

  return (
    <CountriesContext.Provider value={{ countries, changeFilter }}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
