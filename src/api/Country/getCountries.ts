import axios from "axios";
import { Country } from "../../types/Country";

export const getCountries = async () => {
  const { data } = await axios.get<Country[]>(
    "https://restcountries.com/v3.1/all"
  );
  return data;
};
