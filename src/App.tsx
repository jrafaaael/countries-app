import CountriesProvider from "./context/countries/CountriesProvider";

import MainRoute from "./routes/MainRoute";

import "./styles/index.css";

const App = () => {
  return (
    <CountriesProvider>
      <MainRoute />
    </CountriesProvider>
  );
};

export default App;
