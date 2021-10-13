import axios from "axios";
import { Country } from "../../types/Country";

export const getCountries = async () => {
  const { data } = await axios.get<Country[]>(
    "https://restcountries.com/v2/all"
  );
  return data;
};
