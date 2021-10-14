import { Link } from "react-router-dom";
import { Country } from "../../types/Country";

import styles from "./country_details.module.css";

interface Props {
  data: Country;
}

const CountryDetails = ({ data }: Props) => {
  return (
    <section className={styles.country}>
      <section>
        <img
          className={styles.country__flag}
          src={data.flags.svg}
          alt={`${data.name} flag`}
        />
      </section>
      <section>
        <div className={styles.country__name}>
          <h2 className={styles["country__name--common"]}>{data.name}</h2>
          <span className={styles["country__name--official"]}>
            {data.nativeName}
          </span>
        </div>
        <div className={styles.country__info}>
          <div>
            <p>
              <b>Alpha-3 Code:</b> {data.alpha3Code}
            </p>
            <p>
              <b>Capital:</b> {data.capital}
            </p>
            <p>
              <b>Region:</b> {data.region}
            </p>
            <p>
              <b>Population:</b> {data.population}
            </p>
          </div>
          <div>
            <p>
              <b>Sub Region:</b> {data.subregion}
            </p>
            <p>
              <b>Languages: </b>
              {data.languages?.map(
                ({ name }, idx) =>
                  `${name}${idx < data.languages.length - 1 ? ", " : ""}`
              )}
            </p>
            <p>
              <b>Currencies: </b>
              {data.currencies?.map(
                ({ name, symbol }, idx) =>
                  `${name} (${symbol})${
                    idx < data.currencies.length - 1 ? ", " : ""
                  }`
              )}
            </p>
          </div>
        </div>
        <div className={styles.borders}>
          <p>
            <b>Border countries: </b>
          </p>
          {data.borders?.map((border, idx) => (
            <Link
              key={`bd-${border}-${idx}`}
              className={styles.border__badge}
              to={`/country/${border}`}
            >
              {border}
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};

export default CountryDetails;
