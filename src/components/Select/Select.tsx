import { ChangeEvent } from "react";
import { useCountriesContext } from "../../context/countries/useCountriesContext";

import { CONTINENTS } from "../../helpers/constants/CONTINENTS";
import { capitalize } from "../../helpers/functions/capitalize";

import { ReactSVG } from "react-svg";

import styles from "./select.module.css";

const Select = () => {
  const {
    countries: {
      filterBy: { region },
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
        <ReactSVG
          beforeInjection={(svg) => {
            svg.classList.add(styles.arrow);
          }}
          src={
            new URL("../../assets/icons/down-caret.svg", import.meta.url)
              .pathname
          }
        />
      </label>
    </>
  );
};

export default Select;
