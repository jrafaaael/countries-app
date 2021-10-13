import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { getCountry } from "../../api/Country/getCountry";
import { Country as CountryResponse } from "../../types/Country";

import Loading from "../../components/Loading/Loading";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
import { ReactSVG } from "react-svg";

import styles from "./country.module.css";

interface State {
  loading: boolean;
  data: CountryResponse | null;
  error: Error | null;
}

const Country = () => {
  const [{ data, error, loading }, setState] = useState<State>({
    data: null,
    error: null,
    loading: false,
  });
  const { code }: { code: string } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    setState({
      data: null,
      error: null,
      loading: true,
    });
    getCountry(code)
      .then((data) => {
        setState({
          data,
          error: null,
          loading: false,
        });
      })
      .catch((error: Error) => {
        setState({
          data: null,
          error,
          loading: false,
        });
      });
  }, [code]);

  const handleClick = () => goBack();

  return (
    <main>
      {loading && <Loading />}
      {data && (
        <>
          <aside className={styles.back__bar}>
            <button className={styles.back__button} onClick={handleClick}>
              <ReactSVG
                src={
                  new URL("../../assets/icons/left-arrow.svg", import.meta.url)
                    .pathname
                }
              />
              Back
            </button>
          </aside>
          <CountryDetails data={data} />
        </>
      )}
    </main>
  );
};

export default Country;
