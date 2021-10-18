import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";

import { getCountry } from "../../api/Country/getCountry";
import { Country as CountryResponse } from "../../types/Country";

import CountryDetails from "../../components/CountryDetails/CountryDetails";
import GoBack from "../../components/GoBack/GoBack";
import Loading from "../../components/Loading/Loading";
import Main from "../../components/Main/Main";

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

  useEffect(() => {
    setState({
      data: null,
      error: null,
      loading: true,
    });
    getCountry(code)
      .then((data) => {
        if (data.hasOwnProperty("status")) {
          throw new Error();
        } else {
          setState({
            data,
            error: null,
            loading: false,
          });
        }
      })
      .catch((error: Error) => {
        setState({
          data: null,
          error,
          loading: false,
        });
      });
  }, [code]);

  return (
    <Main>
      <GoBack  loading={loading} />
      <>
        {loading && <Loading />}
        {data !== null && <CountryDetails data={data} />}
        {error !== null && <Redirect to="/notfound" />}
      </>
    </Main>
  );
};

export default Country;
