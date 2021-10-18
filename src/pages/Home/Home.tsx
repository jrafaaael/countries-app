import { useCountriesContext } from "../../context/countries/useCountriesContext";

import CountriesList from "../../components/CountriesList/CountriesList";
import ErrorLayout from "../../components/ErrorLayout/ErrorLayout";
import Filters from "../../components/Filters/Filters";
import Loading from "../../components/Loading/Loading";
import Main from "../../components/Main/Main";

const Home = () => {
  const {
    countries: { loading, error },
  } = useCountriesContext();

  return (
    <Main>
      <>
        <Filters />
        {loading && <Loading />}
        {!loading && error === null && <CountriesList />}
        {error !== null && <ErrorLayout />}
      </>
    </Main>
  );
};

export default Home;
