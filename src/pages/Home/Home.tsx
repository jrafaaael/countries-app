import Filters from "../../components/Filters/Filters";
import CountriesList from "../../components/CountriesList/CountriesList";

const Home = () => {
  return (
    <main>
      <Filters />
      <CountriesList />
    </main>
  );
};

export default Home;
