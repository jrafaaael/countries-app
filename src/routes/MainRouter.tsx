import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Country from "../pages/Country/Country";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

import CountriesProvider from "../context/countries/CountriesProvider";
import Navbar from "../components/Navbar/Navbar";

const MainRouter = () => {
  return (
    <Router>
      <Navbar />
      <>
        <CountriesProvider>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Country} path="/country/:code" />
            <Route component={NotFound} path="/notfound" />
            <Redirect to="/notfound" />
          </Switch>
        </CountriesProvider>
      </>
    </Router>
  );
};

export default MainRouter;
