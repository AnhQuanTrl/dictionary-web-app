import { FallbackResult } from "../types/fallbackResult";
import { SearchResult } from "../types/searchResult";
import SearchResultDefinition from "./SearchResultDefinition";

interface SearchResultContainerProps {
  searchResult: SearchResult | FallbackResult | null;
  loading: boolean;
}

const isFallbackResult = (
  result: SearchResult | FallbackResult | null,
): result is FallbackResult => {
  return !!result && typeof (result as FallbackResult).title !== "undefined";
};

const SearchResultContainer = ({ searchResult, loading }: SearchResultContainerProps) => {
  if (loading) {
    return <SearchResultDefinition loading={loading} />;
  }

  if (isFallbackResult(searchResult)) {
    return (
      <div className="mt-32 text-center">
        <span className="mb-10 block text-6xl">😕</span>
        <p className="mb-6 text-base font-bold">{searchResult.title}</p>
        <p className="text-neutral-500">
          {searchResult.message} {searchResult.resolution}
        </p>
      </div>
    );
  }

  return <SearchResultDefinition searchResult={searchResult} />;
};

export default SearchResultContainer;
