import { Continents } from "./Continents";

type Currencies = {
  code: string;
  name: string;
  symbol: string;
};

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export interface Country {
  alpha3Code: string;
  borders: string[];
  capital: string;
  currencies: Currencies[];
  flags: {
    svg: string;
    png: string;
  };
  languages: Language[];
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
}

export interface Filters {
  name: string;
  region: Continents | "all";
}

export interface CountriesState {
  countries: Country[];
  filterBy: Filters;
  loading: boolean;
  error: null | Error;
}
