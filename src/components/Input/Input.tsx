import { ChangeEvent } from "react";
import { useCountriesContext } from "../../context/countries/useCountriesContext";

import styles from "./input.module.css";

const Input = () => {
  const {
    countries: {
      filterBy: { name },
      error,
      loading,
    },
    changeFilter,
  } = useCountriesContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    changeFilter("name", e.target.value);
  return (
    <div className={styles.country__wrapper}>
      <input
        className={styles.country}
        value={name}
        disabled={loading || error !== null}
        type="text"
        name="country"
        id="country"
        placeholder="Search for a country"
        autoComplete="off"
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
