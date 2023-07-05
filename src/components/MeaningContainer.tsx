import { Link } from "react-router-dom";
import { Meaning } from "../types/searchResult";
import Skeleton from "./Skeleton";

interface MeaningContainerProps {
  meaning?: Meaning;
  loading?: boolean;
}

const MeaningContainer = ({ meaning, loading = false }: MeaningContainerProps) => {
  return (
    <div>
      <div className="mb-8 flex items-center gap-4 md:mb-10">
        <h3 className="text-lg font-bold italic md:text-2xl">
          {!loading && meaning ? (
            meaning.partOfSpeech
          ) : (
            <Skeleton variant="text" className="w-12" />
          )}
        </h3>
        <div className="h-0 flex-grow border-t-[1px] border-neutral-400"></div>
      </div>
      {!loading && meaning ? (
        <>
          <h4 className="mb-4 text-base text-neutral-500 md:mb-6 md:text-xl">Meaning</h4>
          <ul className="mb-6 list-outside list-disc space-y-3.5 pl-3 marker:text-purple md:mb-10">
            {meaning.definitions.map((definition, index) => (
              <li key={index}>
                {definition.definition}
                <br />
                {definition.example && (
                  <blockquote className="text-neutral-500">“{definition.example}</blockquote>
                )}
              </li>
            ))}
          </ul>
          {meaning.synonyms.length > 0 ? (
            <div className="flex flex-wrap gap-4 text-base md:text-xl">
              <h4 className="mr-2 text-neutral-500">Synonyms</h4>
              <ul className="contents">
                {meaning.synonyms.map((synonym) => (
                  <li key={synonym} className="list-none font-bold text-purple">
                    <Link
                      to={`?q=${synonym}`}
                      className="hover:decoration-inherit underline decoration-transparent transition duration-200 ease-in-out focus-visible:"
                    >
                      {synonym}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </>
      ) : (
        <Skeleton variant="rectangular" className="h-60 w-full" />
      )}
    </div>
  );
};

export default MeaningContainer;
