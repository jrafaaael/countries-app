import axios from "axios";
import { Country } from "../../types/Country";

export const getCountry = async (code: string) => {
  const { data } = await axios.get<Country>(
    `https://restcountries.com/v2/alpha/${code}`
  );
  return data;
};
