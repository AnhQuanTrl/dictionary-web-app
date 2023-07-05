import { useAudio } from "../hooks/useAudio";
import { SearchResult } from "../types/searchResult";
import Icon from "./Icon";
import MeaningContainer from "./MeaningContainer";
import PlayIconButton from "./PlayIconButton";
import Skeleton from "./Skeleton";
import SkeletonGroup from "./SkeletonGroup";

interface SearchResultDefinitionProps {
  searchResult?: SearchResult | null;
  loading?: boolean;
}

const SearchResultDefinition = ({
  searchResult = null,
  loading = false,
}: SearchResultDefinitionProps) => {
  const phonetic = searchResult?.phonetics[0];
  const sourceUrl = searchResult?.sourceUrls.reverse()[0];
  const [playing, toggle] = useAudio(phonetic?.audio);

  if (!loading && !searchResult) {
    return null;
  }

  return (
    <SkeletonGroup show={loading}>
      <div className="mb-7 mt-6 flex items-center justify-between md:mt-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold md:text-6xl">
            {!loading ? searchResult?.word : <Skeleton variant="text" className="w-36 md:w-72" />}
          </h2>
          {(loading || phonetic) && (
            <span className="text-lg text-purple md:text-2xl">
              {!loading ? phonetic?.text : <Skeleton variant="text" className="w-[72px] md:w-24" />}
            </span>
          )}
        </div>
        {loading ? (
          <PlayIconButton playing={playing} onClick={toggle} loading={true} />
        ) : (
          phonetic && <PlayIconButton playing={playing} onClick={toggle} loading={false} />
        )}
      </div>
      <div className="mb-8 space-y-8 md:mb-10 md:space-y-10">
        {!loading ? (
          searchResult?.meanings.map((meaning) => (
            <MeaningContainer key={meaning.partOfSpeech} meaning={meaning} />
          ))
        ) : (
          <>
            <MeaningContainer loading={true} />
            <MeaningContainer loading={true} />
          </>
        )}
      </div>
      <hr className="mb-6 h-px border-0 bg-neutral-400 md:mb-5" />
      <div className="flex flex-wrap gap-x-6 gap-y-2 pb-20">
        <h5 className="text-sm text-neutral-500 underline">
          {!loading ? "Source" : <Skeleton variant="text" className="w-10 rounded-sm" />}
        </h5>
        <div className="text-sm">
          {!loading ? (
            <a
              className="inline-flex items-center underline transition duration-200 ease-in-out hover:decoration-transparent"
              href={sourceUrl}
              target="_blank"
            >
              {sourceUrl}
              <Icon name="newWindow" className="ml-4 inline-block" />
            </a>
          ) : (
            <Skeleton variant="text" className="w-64 rounded-sm" />
          )}
        </div>
      </div>
    </SkeletonGroup>
  );
};

export default SearchResultDefinition;
