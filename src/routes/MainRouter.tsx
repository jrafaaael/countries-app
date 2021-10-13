import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Country from "../pages/Country/Country";
import Home from "../pages/Home/Home";

import Navbar from "../components/Navbar/Navbar";
import CountriesProvider from "../context/countries/CountriesProvider";

const MainRouter = () => {
  return (
    <Router>
      <Navbar />
      <>
        <CountriesProvider>
          <Switch>
            <Route exact component={Country} path="/country/:code" />
            <Route exact component={Home} path="/" />
          </Switch>
        </CountriesProvider>
      </>
    </Router>
  );
};

export default MainRouter;
