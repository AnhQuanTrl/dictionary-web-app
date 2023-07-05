import { fetchFromDictionary } from "../api/dictionary";

export async function rootLoader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("q");
  if (!searchTerm) {
    return { searchResult: null };
  }

  const searchResult = await fetchFromDictionary(searchTerm);
  return { searchResult };
}
