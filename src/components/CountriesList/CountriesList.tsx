import { useMemo } from "react";
import { useCountriesContext } from "../../context/countries/useCountriesContext";

import CountryCard from "../CountryCard/CountryCard";

import styles from "./countries_list.module.css";

const CountriesList = () => {
  const {
    countries: {
      countries,
      filterBy: { name, region },
    },
  } = useCountriesContext();

  const countriesFiltered = useMemo(
    () =>
      countries.filter(
        (country) =>
        // TODO: change property name to nativeName
          country.name.toLowerCase().includes(name.toLowerCase()) &&
          (country.region.toLowerCase().includes(region) || region === "all")
      ),
    [countries, name, region]
  );

  return (
    <>
      {countriesFiltered.length > 0 && countries.length > 0 ? (
        <section className={styles.countries}>
          {countriesFiltered.map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
        </section>
      ) : (
        <section>
          <h2>Sorry, the country "{name}" doesn't exists.</h2>
        </section>
      )}
    </>
  );
};

export default CountriesList;
