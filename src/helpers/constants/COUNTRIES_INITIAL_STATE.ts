import { CountriesState } from "../../types/Country";

export const COUNTRIES_INITIAL_STATE: CountriesState = {
  countries: [],
  filterBy: {
    name: "",
    region: "all",
  },
  error: null,
  loading: false,
};
