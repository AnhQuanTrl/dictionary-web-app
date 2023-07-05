import { z } from "zod";
import { fallbackResultSchema } from "../types/fallbackResult";
import { searchResultSchema } from "../types/searchResult";

export const fetchFromDictionary = async (searchTerm: string) => {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
  if (response.status === 404) {
    const data = fallbackResultSchema.parse(await response.json());
    return data;
  }
  if (response.status === 200) {
    const data_2 = z.array(searchResultSchema).parse(await response.json());
    return data_2[0];
  }
  throw new Error("Response indicate non-successful status code");
};
