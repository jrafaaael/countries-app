import { CountriesState, Country, Filters } from "../../types/Country";

type Action =
  | {
      type: "FETCHING";
    }
  | {
      type: "FETCHED";
      payload: {
        countries: Country[];
      };
    }
  | {
      type: "FETCH ERROR";
      payload: {
        error: Error;
      };
    }
  | {
      type: "CHANGE FILTER";
      payload: {
        by: keyof Filters;
        value: string;
      };
    };

export const countriesReducer = (
  state: CountriesState,
  action: Action
): CountriesState => {
  switch (action.type) {
    case "FETCHING": {
      return {
        ...state,
        countries: [],
        error: null,
        loading: true,
      };
    }
    case "FETCHED": {
      return {
        ...state,
        countries: action.payload.countries,
        error: null,
        loading: false,
      };
    }
    case "FETCH ERROR": {
      return {
        ...state,
        countries: [],
        error: action.payload.error,
        loading: false,
      };
    }
    case "CHANGE FILTER": {
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          [action.payload.by]: action.payload.value,
        },
      };
    }
    default: {
      return state;
    }
  }
};
