import { useMemo } from "react";
import { useCountriesContext } from "../../context/countries/useCountriesContext";

import CountryCard from "../CountryCard/CountryCard";
import Loading from "../Loading/Loading";

import styles from "./countries_list.module.css";

const CountriesList = () => {
  const {
    countries: {
      countries,
      filterBy: { name, region },
      loading,
      error,
    },
  } = useCountriesContext();

  const countriesFiltered = useMemo(
    () =>
      countries.filter(
        (country) =>
          country.name.toLowerCase().includes(name.toLowerCase()) &&
          (country.region.toLowerCase().includes(region) || region === "all")
      ),
    [countries, name, region]
  );

  return (
    <section className={styles.countries}>
      {loading ? (
        <Loading />
      ) : (
        countriesFiltered.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))
      )}
    </section>
  );
};

export default CountriesList;
