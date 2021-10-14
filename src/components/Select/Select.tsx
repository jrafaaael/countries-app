import { ChangeEvent } from "react";
import { useCountriesContext } from "../../context/countries/useCountriesContext";

import { CONTINENTS } from "../../helpers/constants/CONTINENTS";
import { capitalize } from "../../helpers/functions/capitalize";

import styles from "./select.module.css";

const Select = () => {
  const {
    countries: {
      filterBy: { region },
      loading,
      error
    },
    changeFilter,
  } = useCountriesContext();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
    changeFilter("region", e.target.value);

  return (
    <>
      <label className={styles.label__select} htmlFor="slct">
        <select
          className={styles.select}
          value={region}
          onChange={handleChange}
          disabled={loading || error !== null}
        >
          <option className={styles.option} value="all" label="All"></option>
          {CONTINENTS.map((continent) => (
            <option
              className={styles.option}
              key={continent}
              value={continent}
              label={capitalize(continent)}
            ></option>
          ))}
        </select>
        <svg className={styles.arrow}>
          <use xlinkHref="#select-arrow-down"></use>
        </svg>
      </label>
      <svg className={styles.sprites}>
        <symbol id="select-arrow-down" viewBox="0 0 10 6">
          <polyline points="1 1 5 5 9 1"></polyline>
        </symbol>
      </svg>
    </>
  );
};

export default Select;
