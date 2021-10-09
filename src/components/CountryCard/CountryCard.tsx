import { Country } from "../../types/Country";

import styles from "./country_card.module.css";

const CountryCard = ({ ...props }: Country) => {
  return (
    <article className={styles.country__card}>
      <div>
        <img
          className={styles.country__flag}
          src={props.flags.svg}
          alt={`${props.name.official} flag`}
          loading="lazy"
        />
      </div>
      <div className={styles.country__info}>
        <h3 className={styles.country__name}>{props.name.common}</h3>
        <p>
          <strong>Population: </strong>
          {props.population}
        </p>
        <p>
          <strong>Region: </strong>
          {props.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {props.capital}
        </p>
      </div>
    </article>
  );
};

export default CountryCard;
